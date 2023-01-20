import { PrismaClient } from "@prisma/client";

const prima = new PrismaClient();

async function getAll() {
    return await prima.user.findMany();
}

export default {
    getAll,
}