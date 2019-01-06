import fs from 'fs';
import { Request, Response } from 'express';
import { getToken, verifyToken } from '../JWT';

const searchUser = (username: string, users: any[]) => {
  return users.filter(user => user.username.toLowerCase() === username)[0];
}
export const authenticate = (request: Request, response: Response) => {
  const { users: dbUsers } = require('../mock-data/db.json');
  const { username, password } = request.body;
  const retrievedUser = searchUser(username, dbUsers);
  if (retrievedUser && retrievedUser.username === 'admin' && password === 'test') {
    const token = getToken({ username, role: 'ROLE_ADMIN', id: retrievedUser.id })
    response.status(200).json({ token }).end();
  } else if (retrievedUser && password === 'test') {
    const token = getToken({ username, role: 'ROLE_USER', id: retrievedUser.id })
    response.status(200).json({ token }).end();
  } else {
    response.status(404).end();
  }
}
