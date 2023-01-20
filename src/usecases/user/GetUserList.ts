import UserRepository from "../../repositories/user";

export default async function GetUserList() {
    return await UserRepository.getAll();
} 