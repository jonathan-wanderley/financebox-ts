import { validate, Joi } from "express-validation";

export const AuthUserValidator = validate({
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
})
