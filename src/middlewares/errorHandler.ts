import { ValidationError } from "express-validation";
import { Request, Response, NextFunction } from 'express'
import AppError from "../utils/AppError";

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {

  if (error instanceof ValidationError) {
    const responseMessage = error.details.body ? error.details.body[0].message : error.details;
    return res
      .status(error.statusCode)
      .json({ error: true, statusCode: error.statusCode, message: responseMessage });
  }

  if(error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json({ error: true, statusCode: error.statusCode, message: error.message });
  }
  
  return res
    .status(500)
    .json({ error: true, statusCode: 500, message: "Internal Server Error" });
};

export default errorHandler;