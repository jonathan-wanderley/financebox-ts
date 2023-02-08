import { Router } from "express";
import UserController from "../controllers/user";
import auth from "../middlewares/auth";
import * as UserValidator from "../validators/user";

const routes = Router();

routes.get('/users', UserController.getList);
routes.get('/users/:id', UserController.getById);
routes.post('/users', UserValidator.createUserValidator, UserController.register);
routes.put('/users/:id', auth, UserValidator.UpdateUserValidator, UserController.update);
routes.delete('/users/:id', UserController.destroy);

routes.post('/auth', UserValidator.AuthUserValidator, UserController.auth);

export default routes;