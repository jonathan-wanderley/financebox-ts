import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface TransactionDTO {
    name: string;
    value: number;
    date: Date;
    userId: string;
}

async function add(transaction: TransactionDTO) {
    const { name, value, date, userId: user_id } = transaction;

    return await prisma.transaction.create({
        data: {
            name,
            value,
            date,
            user_id,
        }
    })
}

export default {
    add,
}