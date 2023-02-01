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

async function getByUser(req: Request, res: Response) {
    const { id } = req.user as User;

    const userTransactions = await TransactionUsecase.GetTransactions(id);

    return res.json(userTransactions);
}

async function getTransactionById(req: Request, res: Response) {
    const { id: userId } = req.user as User;
    const { id: transactionId } = req.params;

    const userTransaction = await TransactionUsecase.GetTransactionById(userId, transactionId);

    return res.json(userTransaction);
}

export default {
    add,
    getByUser,
    getTransactionById,
}