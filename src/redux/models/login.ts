import { createModel } from '@rematch/core';
import initialState from '../initialeState';
import { Dispatch } from 'redux';

// import the api call
import AuthService from '../../Auth';
import { History } from 'history';

const { login: LoginCall } = AuthService;

interface Login {
  username: string;
  password: string;
  history: History;
}

export const login = createModel({
  state: initialState.login,
  reducers: {
    loginRequest(state: any, payload: Login) {
      return { 
        ...state,
        username: payload.username,
        password: payload.password,
        history: payload.history,
      }
    },
    loginError(state: any, error: any) {
      return {
        ...state,
        error,
      }
    }
  },
  effects: (dispatch: Dispatch) => ({
    async login(payload: Login, rootState: any) {
      const { username, password, history} = payload;
      try {
        const response = await LoginCall(username, password);
        if (response.token) {
          history.push('/');
          const { role, id } = AuthService.getProfile();
          if (role === 'ROLE_ADMIN') {
            // dispatch fetch orders
            // dispatch fetch users
          } else {
            // dispatch fetch orders for specifique user with its id
          }
          // go home
        } else {
          this.loginRequest({ username, password });
        }
      } catch (error) {
        this.loginError(error);
      }
    }
  })
});