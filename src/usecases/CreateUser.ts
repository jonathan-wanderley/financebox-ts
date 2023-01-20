import UserRepository from "../repositories/user";
import AppError from "../utils/AppError";
import bcript from "bcryptjs";

interface ICreateUser {
    name: string;
    email: string;
    password: string;
}

export default async function CreateUser(userData: ICreateUser) {
    const { name, email, password } = userData;
    
    const hasUser = await UserRepository.getByEmail(email);
    if(hasUser) {
        throw new AppError(400, "Email has been registred");
    }

    const hashedPassword = bcript.hashSync(password, 10);
    const newUser = await UserRepository.create(name, email, hashedPassword);

    return newUser;
}