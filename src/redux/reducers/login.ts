import initialState from "../initialeState";
import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS } from "../../const";

const login = (state=initialState.login, actions: any) => {
  switch(actions.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        password: actions.password,
        username: actions.username,
        isLoad: actions.isLoad,
      };
    case LOGIN_SUCCESS:
      console.log(actions);
      return {
        ...state,
        isLoad: actions.isLoad,
      }
    case LOGIN_ERROR:
      return {
        ...state,
        isLoad: actions.isLoad,
        error: actions.error,
      }
    default: return state;
  }
}

export default login;