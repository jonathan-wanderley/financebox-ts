import UserRepository from "../../repositories/user";

export async function GetUserList() {
    return await UserRepository.getAll();
} 