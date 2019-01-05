import { Request, Response } from 'express';
import { getToken, verifyToken } from '../JWT';

export const authenticate = (request: Request, response: Response) => {
  const { username, password } = request.body;
  if (username === 'admin' && password === 'admin') {
    const token = getToken({ username, role: 'ROLE_ADMIN' })
    response.status(200).json({ token }).end();
  } else if (username === 'biker' && password === 'biker') {
    const token = getToken({ username, role: 'ROLE_USER' })
    response.status(200).json({ token }).end();
  } else {
    response.status(404).end();
  }
}
