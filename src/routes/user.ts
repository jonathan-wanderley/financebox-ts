import { Router } from "express";
import UserController from "../controllers/user";

const routes = Router();

routes.get('/users', UserController.getList);

export default routes;