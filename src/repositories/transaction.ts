import { PrismaClient } from "@prisma/client";
import { AddTransactionDTO } from "./dtos/transaction";

const prisma = new PrismaClient();

async function add(transaction: AddTransactionDTO) {
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

async function destroy(id: string) {
    await prisma.transaction.delete({
        where: {
            id,
        }
    })
}

export default {
    add,
    getByUser,
    getTransactionById,
    destroy,
}