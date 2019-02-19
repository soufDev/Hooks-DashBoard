import { createModel } from '@rematch/core';
import initialState from '../initialeState';
import { Dispatch } from 'redux';

// import the api call
import AuthService from '../../Auth';

const { login: LoginCall } = AuthService;

interface Login {
  username: string;
  password: string;
}

export const login = createModel({
  state: initialState.login,
  reducers: {
    loginRequest(state: any, payload: Login) {
      return { 
        ...state,
        username: payload.username,
        password: payload.password
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
    async login({ username, password }: Login, rootState: any) {
      console.log(dispatch);
      try {
        const response = await LoginCall(username, password);
        if (response.token) {
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