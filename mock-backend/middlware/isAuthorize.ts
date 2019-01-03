import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../JWT';

export const isAuthorize = (request: Request, response: Response, next: NextFunction) => {
  const { headers } = request;
  const authorization = headers['authorization']
  if (authorization) {
    const authorizationSplited = authorization.split(' ');
    if (authorizationSplited.length === 2 && authorizationSplited[0] === 'Barear') {
      try {
        const decoded = verifyToken(authorizationSplited[1]);
        if (decoded) {
          next();
        } else {
          response.status(401).end();
        }
      } catch (e) {
        response.status(401).end();
      }
    } else {
      response.status(401).end();
    }
  } else {
    response.status(401).end();
  }
}