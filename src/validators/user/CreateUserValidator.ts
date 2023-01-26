import { validate, Joi } from "express-validation";

export const createUserValidator = validate({
  body: Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
})
