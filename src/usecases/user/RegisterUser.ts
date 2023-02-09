import UserRepository from "../../repositories/user";
import AppError from "../../utils/AppError";
import bcript from "bcryptjs";
import { RegisterUserDTO } from "./dtos/registerUserDTO";
import { RegisterUserReponseDTO } from "./dtos/registerUserResponseDTO";

export async function RegisterUser(userData: RegisterUserDTO) {
    const { name, email, password } = userData;
    
    const hasUser = await UserRepository.getByEmail(email);
    if(hasUser) {
        throw new AppError(400, "Email has been registred");
    }

    const hashedPassword = bcript.hashSync(password, 10);
    
    const newUser: RegisterUserReponseDTO = await UserRepository.create({ name, email, password: hashedPassword });
    
    delete newUser.password;

    return newUser;
}