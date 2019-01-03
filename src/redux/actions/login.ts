import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "../../const";
import { History } from "history";

interface ILogin {
  username: string;
  password: string
}
export const loginRequest = (data: ILogin, history: History) => ({
  username: data.username,
  password: data.password,
  isLoad: true,
  history,
  type: LOGIN_REQUEST
});

export const loginSuccess = () => ({
  isLoad: false,
  type: LOGIN_SUCCESS,
});

export const loginError = ({ error }: { error: string }) => ({
  error,
  isLoad: false,
  type: LOGIN_ERROR,
});