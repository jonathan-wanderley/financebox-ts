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

interface UpdateUserDTO {
    name?: string;
    email?: string;
    password?: string;
}

async function update(id: string, userData: UpdateUserDTO) {
    return await prisma.user.update({
        where: {
            id,
        },
        data: userData,
    })  
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
    update,
    destroy,
    getById,
}