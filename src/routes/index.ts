import { Router } from "express";
import userRoutes from "./user";
import transactionRoutes from "./transaction";

const routes = Router();

routes.use(userRoutes);
routes.use(transactionRoutes);

export default routes;
