import { Router } from "express";
import auth from "../middlewares/auth";
import * as TransactionValidator from "../validators/transaction";
import TransactionController from "../controllers/transaction";

const routes = Router();

routes.post('/transactions', auth, TransactionValidator.AddTransactionValidator, TransactionController.add);

export default routes;