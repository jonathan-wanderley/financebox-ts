import { Router } from "express";
import UserController from "../controllers/user";
import * as UserValidator from "../validators/user";

const routes = Router();

routes.get('/users', UserController.getList);
routes.get('/users/:id', UserController.getById);
routes.post('/users', UserValidator.createUserValidator, UserController.create);
routes.delete('/users/:id', UserController.destroy);

export default routes;