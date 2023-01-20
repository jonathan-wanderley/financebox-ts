import { Request, Response } from "express";
import CreateUser from "../usecases/user/CreateUser";
import GetUserList from "../usecases/user/GetUserList";

async function getList(req: Request, res: Response) {
    const userList = await GetUserList();
    return res.json(userList);
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

export default {
    getList,
    create,
}
