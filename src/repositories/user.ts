import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAll() {
    return await prisma.user.findMany();
}

async function getById(id: string) {
    return await prisma.user.findFirst({
        where: {
            id
        }
    });
}

async function getByEmail(email: string) {
    return await prisma.user.findUnique({
        where: {
            email
        }
    });
}

async function create(name: string, email: string, password: string) {
    return await prisma.user.create({
        data: {
            name,
            email,
            password
        }
    });
}

async function destroy(id: string) {
    await prisma.user.delete({
        where: {
            id
        }
    });
}

export default {
    getAll,
    getByEmail,
    create,
    destroy,
    getById,
}