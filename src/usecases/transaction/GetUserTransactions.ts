import TransactionRepository from "../../repositories/transaction";

export async function GetTransactions(userId: string) {
    return await TransactionRepository.getByUser(userId);
}