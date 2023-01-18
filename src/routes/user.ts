import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const routes = Router();
const prisma = new PrismaClient();

routes.get('/users', async (req: Request, res: Response) => {
    const userList = await prisma.user.findMany();
    return res.json(userList);
});

export default routes;