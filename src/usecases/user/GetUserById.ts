import UserRepository from "../../repositories/user";
import AppError from "../../utils/AppError";

export async function GetUserById(id: string) {
    const user = await UserRepository.getById(id);
    if(!user) {
        throw new AppError(404, "User not found")
    }

    return user;
} 