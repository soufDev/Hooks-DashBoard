import { FETCH_USERS, FETCH_USERS_REQUEST, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS } from "../../const";

export const fetchUsers = (path: string) => ({
  path,
  type: FETCH_USERS, 
})
export const fetchUsersRequest = () => ({
  isLoad: true,
  type: FETCH_USERS_REQUEST,
})

export const fetchUsersError = (error: string) => ({
  error,
  isLoad: false,
  type: FETCH_USERS_ERROR,
});

export const fetchUsersSuccess = (users: any[]) => ({
  users,
  isLoad: false,
  type: FETCH_USERS_SUCCESS,
});