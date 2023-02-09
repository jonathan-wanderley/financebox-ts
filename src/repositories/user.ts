import { PrismaClient } from "@prisma/client";
import { CreateUserDTO, UpdateUserDTO } from "./dtos/user";

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

async function create({ name, email, password }: CreateUserDTO) {
    return await prisma.user.create({
        data: {
            name,
            email,
            password
        }
    });
}

async function update({ id, name, email, password }: UpdateUserDTO) {
    return await prisma.user.update({
        where: {
            id,
        },
        data: {
            name,
            email,
            password,
        },
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