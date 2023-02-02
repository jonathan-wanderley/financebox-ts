import TransactionRepository from "../../repositories/transaction";
import AppError from "../../utils/AppError";

export async function DeleteTransaction(userId: string, transactionId: string) {
    const userTransaction = await TransactionRepository.getTransactionById(transactionId);

    if(!userTransaction) {
        throw new AppError(404, "Not found");
    }

    if(userTransaction && userTransaction.user_id != userId) {
        throw new AppError(404, "Not found");
    }

    await TransactionRepository.destroy(transactionId);

    return;
}