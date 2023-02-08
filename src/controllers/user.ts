import { Request, Response } from "express";
import * as userUsecase from "../usecases/user";

async function getList(req: Request, res: Response) {
    const userList = await userUsecase.GetUserList();
    return res.json(userList);
}

async function getById(req: Request, res: Response) {
    const { id } = req.params;

    const user = await userUsecase.GetUserById(id);

    return res.json(user);
}

async function register(req: Request, res: Response) {
    const { name, email, password } = req.body;
    
    const newUser = await userUsecase.RegisterUser({
        name,
        email,
        password
    });

    return res.json(newUser);
}

async function update(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const { id } = req.params;
    const { id: userId } = req.user as User;

    const userUpdated = await userUsecase.UpdateUser(userId, { id, name, email, password });

    return res.json(userUpdated);
}

async function destroy(req: Request, res: Response) {
    const { id: userToDelete } = req.params;
    const { id: userId } = req.user as User;

    await userUsecase.DeleteUser(userId, userToDelete);

    return res.status(204).json();
}

async function auth(req: Request, res: Response) {
    const { email, password } = req.body;

    const response = await userUsecase.AuthUser({ email, password });

    return res.json(response);
}

export default {
    getById,
    getList,
    register,
    update,
    destroy,
    auth,
}
