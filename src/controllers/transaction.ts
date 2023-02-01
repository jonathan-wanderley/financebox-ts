import { Request, Response } from "express";
import * as TransactionUsecase from "../usecases/transaction";

async function add(req: Request, res: Response) {
    const { name, value, date } = req.body;
    const { id } = req.user as User;

    const transactionData = {
        name,
        value,
        date,
        userId: id,
    }

    const newTransaction = await TransactionUsecase.AddTransaction(transactionData);

    return res.status(201).json(newTransaction);
}

export default {
    add,
}