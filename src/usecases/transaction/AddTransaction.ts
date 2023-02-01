import transactionRepository from "../../repositories/transaction";

interface TransactionDTO {
    name: string;
    value: number;
    date: Date;
    userId: string;
}

export async function AddTransaction(transaction: TransactionDTO) {
    return await transactionRepository.add(transaction);
}