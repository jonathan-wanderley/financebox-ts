import { validate, Joi } from "express-validation";

export const AddTransactionValidator = validate({
  body: Joi.object({
    name: Joi.string().min(2).required(),
    value: Joi.number(),
    date: Joi.date(),
  }),
})
