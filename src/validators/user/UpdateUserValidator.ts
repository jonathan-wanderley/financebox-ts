import { validate, Joi } from "express-validation";

export const UpdateUserValidator = validate({
  body: Joi.object({
    name: Joi.string().min(2),
    email: Joi.string().email(),
    password: Joi.string(),
  }),
})
