import { Router, Request, Response } from "express";
import userRoutes from "./user";

const routes = Router();

routes.use(userRoutes);

export default routes;
