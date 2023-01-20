import { Router } from "express";
import UserController from "../controllers/user";

const routes = Router();

routes.get('/users', UserController.getList);
routes.post('/users', UserController.create);
routes.delete('/users/:id', UserController.destroy);

export default routes;