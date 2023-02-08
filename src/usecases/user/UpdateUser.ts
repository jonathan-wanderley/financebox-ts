import AppError from "../../utils/AppError";
import UserRepository from "../../repositories/user";
import bcript from "bcryptjs";

interface IUpdateUser {
    id: string;
    name?: string;
    email?: string;
    password?: string;
}

interface ResponseUserData {
    id: string;
    name: string;
    email: string;
    password?: string;
    created_at: Date;
    updated_at: Date;
}

export async function UpdateUser(userId: string, userData: IUpdateUser) {
    const { id: sentId, name, email, password } = userData;

    if(userId !== sentId) {
        throw new AppError(403, "User dont have permission");
    }

    if(email) {
        const hasUser = await UserRepository.getByEmail(email);
        if(hasUser) {
            throw new AppError(400, "Email has been registred");
        }
    }

    if(password) {
        const hashedPassword = bcript.hashSync(password, 10);
        userData.password = hashedPassword;
    }
    
    const updatedUser: ResponseUserData = await UserRepository.update(userId, userData); 
    delete updatedUser.password;

    return updatedUser;
}