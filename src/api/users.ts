import AuthService from '../Auth';

export const fetchUsers = (path: string): Promise<Response> => {
  const response = AuthService.fetch(path, null);
  return response;
}