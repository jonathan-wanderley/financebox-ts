import UserRepository from "../../repositories/user";
import AppError from "../../utils/AppError";

export async function DeleteUser(userId: string, userToDelete: string) {
    if(userId !== userToDelete) {
        throw new AppError(403, "User dont have permission");
    }
    
    await UserRepository.destroy(userToDelete);
}