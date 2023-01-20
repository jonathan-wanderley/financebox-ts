import { Request, Response } from "express";
import CreateUser from "../usecases/CreateUser";
import DeleteUser from "../usecases/DeleteUser";
import GetUserById from "../usecases/GetUserById";
import GetUserList from "../usecases/GetUserList";

async function getList(req: Request, res: Response) {
    const userList = await GetUserList();
    return res.json(userList);
}

async function getById(req: Request, res: Response) {
    const { id } = req.params;

    const user = await GetUserById(id);

    return res.json(user);
}

async function create(req: Request, res: Response) {
    const { name, email, password } = req.body;
    
    const newUser = await CreateUser({
        name,
        email,
        password
    });

    return res.json(newUser);
}

async function destroy(req: Request, res: Response) {
    const { id } = req.params;

    await DeleteUser(id);

    return res.status(204).json();
}

export default {
    getList,
    create,
    destroy,
    getById,
}
