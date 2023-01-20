import { Request, Response } from "express";
import GetUserList from "../usecases/user/GetUserList";

async function getList(req: Request, res: Response) {
    const userList = await GetUserList();
    return res.json(userList);
}

export default {
    getList,
}
