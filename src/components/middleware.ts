
import express , { Request, Response, NextFunction } from 'express';
import { verify } from "jsonwebtoken";
const app = express();

export function authorizationMiddleware(req: Request, res: Response, next: NextFunction) {
    // verificar si el usuario esta autorizado
    const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: "Unauthorized" });
  if (!authorization.startsWith("Bearer "))
    return res.status(401).json({ message: "Token format wrong" });

  const token = authorization.replace("Bearer ", "");
  const T_token :any = process.env.TOKEN_SECRET ;  
  verify(token, T_token, (err : any, decoded : any ) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
        req.body = decoded;
    next();
  });
}
