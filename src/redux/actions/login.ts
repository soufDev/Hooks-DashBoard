import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "../../const";

interface ILogin {
  username: string;
  password: string
}
export const loginRequest = (data: ILogin) => ({
  username: data.username,
  password: data.password,
  isLoad: true,
  type: LOGIN_REQUEST
});

export const loginSuccess = ({ path }: { path: string}) => ({
  path,
  isLoad: false,
  type: LOGIN_SUCCESS,
});

export const loginError = ({ error }: { error: string }) => ({
  error,
  isLoad: false,
  type: LOGIN_ERROR,
});