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

async function getByUser(id: string) {
    return await prisma.transaction.findMany({
        where: {
            user_id: id
        }
    });
}

async function getTransactionById(id: string) {
    return await prisma.transaction.findFirst({
        where: {
            id,
        }
    })
}

export default {
    add,
    getByUser,
    getTransactionById,
}