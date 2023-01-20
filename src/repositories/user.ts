import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAll() {
    return await prisma.user.findMany();
}

async function getByEmail(email: string) {
    return await prisma.user.findUnique({
        where: {
            email
        }
    })
}

async function create(name: string, email: string, password: string) {
    return await prisma.user.create({
        data: {
            name,
            email,
            password
        }
    })
}

export default {
    getAll,
    getByEmail,
    create
}