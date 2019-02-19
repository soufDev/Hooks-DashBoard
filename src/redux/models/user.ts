import { createModel } from '@rematch/core';
import initialState from '../initialeState';
import { fetchUsers as fetchUsersApi } from '../../api/users';

export const user = createModel({
  state: initialState.users,
  reducers: {
    fetchUsers: (users: any, state: any) => ({
      ...state,
      users,
    }),
    fetchUsersError: (error: any, state: any) => ({
      ...state,
      error,
    })
  },
  effects: {
    async getUsers(path: string) {
      try {
        const users = await fetchUsersApi(path);
        this.fetchUsers(users);
      } catch (error) {
        this.fetchUsersError(error);
      }
    }
  }
})