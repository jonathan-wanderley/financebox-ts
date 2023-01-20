import UserRepository from "../repositories/user";

export default async function DeleteUser(id: string) {
    await UserRepository.destroy(id);
}