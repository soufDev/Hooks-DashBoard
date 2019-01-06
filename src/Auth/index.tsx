import decode from 'jwt-decode';

class AuthService {
  constructor() {
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  public async login(username: string, password: string) {
    const response = await this.fetch('/authorize', {
      method: 'POST',
      body: JSON.stringify({
          username,
          password
      })
    })
    this.setToken(response.token) 
    return response;
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
    const headers: any = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }
    console.log({
      headers,
      ...options
    });
    return fetch(url, {
      headers,
      ...options
    }).then(this._checkStatus)
      .then(response => response.json())
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