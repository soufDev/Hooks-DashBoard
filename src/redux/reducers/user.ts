import initialState from "../initialeState";
import { FETCH_USERS_REQUEST, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS } from "../../const";

const userReducer = (state = initialState.users, action: any) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoad: action.isLoad,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        isLoad: action.isLoad,
        error: action.error,
        users: [],
      };
    case FETCH_USERS_SUCCESS: 
      return {
        ...state,
        isLoad: action.isLoad,
        users: action.users,
        error: null,
      }
    default:
      return state;
  }
}

export default userReducer;