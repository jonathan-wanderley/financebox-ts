import UserRepository from "../../repositories/user";

export async function DeleteUser(id: string) {
    await UserRepository.destroy(id);
}