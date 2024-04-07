import Joi from "joi";

const registerUserValidation = Joi.object({
    username: Joi.string().max(255).required(),
    email: Joi.string().max(255).email().required(),
    password: Joi.string().max(255).required()
});

const loginUserValidation = Joi.object({
    username: Joi.string().max(255).required(),
    password: Joi.string().max(255).required()
});

const userVerificationValidation = Joi.string().required();

export {
    registerUserValidation,
    loginUserValidation,
    userVerificationValidation
}