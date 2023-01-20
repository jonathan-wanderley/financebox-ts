import { Router } from "express";
import UserController from "../controllers/user";

const routes = Router();

routes.get('/users', UserController.getList);
routes.post('/users', UserController.create);

export default routes;