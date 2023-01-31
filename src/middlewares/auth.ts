import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import ENV from "../config/env";
import AppError from "../utils/AppError";


export default async function auth(req: Request, res: Response, next: NextFunction) {
        const { authorization } = req.headers;

        if(!authorization) {
            throw new AppError(401, "Not Allowed");
        }

        const token = authorization.replace('Bearer', '').trim();

        try {
            const data = jwt.verify(token, ENV.JWT_SECRET);
            req.user = data as User;
            return next();
        } catch (error) {
            throw new AppError(401, "Unauthorized");
        }
        
}