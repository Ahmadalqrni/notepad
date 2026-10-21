import joi from "joi";

const signupSchema = joi.object({
  username: joi.string().min(2).max(30).required(),
  email: joi.string().min(8).max(30).required(),
  password: joi.string().min(8).max(30).required(),
});

const loginSchema = joi.object({
  email: joi.string().min(8).max(30).required(),
  password: joi.string().max(30).required(),
});

export { signupSchema, loginSchema };
