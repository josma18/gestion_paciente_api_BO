import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

export const generarToken = (payload: object): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};

export const verificarTokenJWT = (token: string): any => {
  return jwt.verify(token, JWT_SECRET);
};