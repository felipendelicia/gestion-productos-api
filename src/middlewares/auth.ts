import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import config from '../config/config';

interface IPayload {
    id:  string;
    iat: number;
    exp: number
}

const verifyToken = (req:Request, res:Response, next:NextFunction) => {
    const token = req.header('token')

    if (!token) return res.status(401).send('Acceso denegado')

    const payload = jwt.verify(token, config.TOKEN_KEY!) as IPayload

    req.userId = payload.id

    next()
};

export default verifyToken