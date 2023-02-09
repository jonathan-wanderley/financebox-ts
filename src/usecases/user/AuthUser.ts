import AppError from "../../utils/AppError";
import UserRepository from "../../repositories/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ENV from "../../config/env";
import { LoginUserDTO } from "./dtos/loginUserDTO";

export async function AuthUser({ email, password: userPass }: LoginUserDTO) {
    const user = await UserRepository.getByEmail(email);
    if(!user) throw new AppError(400, "Credenciais invalidas");

    const isValidPassword = await bcrypt.compare(userPass, user.password);
    if (!isValidPassword) {
      throw new AppError(400, "Credenciais invalidas");
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      ENV.JWT_SECRET,
      { expiresIn: '3d' }
    );

    const { password, ...userFormated } = user;

    return { user: userFormated, token };
}