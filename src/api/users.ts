import AuthService from '../Auth';
import { AxiosPromise } from 'axios';
import { User } from '../interface/User';

export const fetchUsers = async (path: string): Promise<User[]> => {
  const response = await AuthService.fetch(path, { method: 'GET' });
  return response.data;
}