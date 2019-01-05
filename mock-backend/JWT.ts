import fs from 'fs';
import jwt, { verify } from 'jsonwebtoken';

interface Payload {
  username: string,
  role: string,
}
const publicKey = fs.readFileSync('./public.pem', 'utf8');
const privateKey = fs.readFileSync('./private.pem', 'utf8');
const issuer  = 'Saloodo';   
const subject  = 'dev-team@saloodo.com';   
const audience  = 'http://saloodo.com';
const signOptions = {
  issuer,
  subject,
  audience,
  expiresIn: "48h",
  algorithm: "RS256"
};

export const getToken = (payload: Payload) => jwt.sign(payload, privateKey, signOptions);

export const verifyToken = (token: string) => jwt.verify(token, publicKey);