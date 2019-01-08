import decode from 'jwt-decode';
import axios, { AxiosInstance, Canceler } from 'axios';
const { CancelToken } = axios;
let cancel: Canceler;
class AuthService {
  public client: AxiosInstance;
  constructor() {
    const headers: any = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    this.client = axios.create({
      baseURL: 'http://localhost:5000',
      timeout: 2000,
      headers,
    });
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.abortRequest = this.abortRequest.bind(this);
  }

  public async login(username: string, password: string) {
    const response = await this.client.post('/authorize', {
          username,
          password
    })
    this.setToken(response.data.token);
    return response.data;
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    try {
      const decoded: any = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      }
      return false;
    }
    catch (err) {
        return false;
    }
  }

  setToken(idToken: string) {
    localStorage.setItem('id_token', idToken)
  }

  getToken(): string {
    return localStorage.getItem('id_token') || '';
  }

  logout() {
    localStorage.removeItem('id_token');
  }

  getProfile(): {username: string; role: string, id: number} {
    return this.getToken() !== '' ? decode(this.getToken()): {username: '', role: '', id: -1};
  }


  fetch(url: string, options: any) {

    if (this.loggedIn()) {
      this.client.defaults.headers['Authorization'] = 'Bearer ' + this.getToken();
    }
    return this.client(url, {
      ...options,
      cancelToken: new CancelToken((cancellation) => cancel = cancellation),
    });
  }

  abortRequest() {
    return cancel();
  }

  _checkStatus(response: any) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      throw response.statusText
    }
  }
}

export default new AuthService();