import {validate} from "../validation/validation.js";
import {registerUserValidation} from "../validation/user-validation.js";
import {prismaClient} from "../application/database.js";
import {ResponseError} from "../error/response-error.js";
import bcrypt from "bcrypt";
import {v4 as uuid} from "uuid"
import {logger} from "../application/logging.js";
import {getCurrentDate} from "../util/get-current-date.js";
import {sendEmail} from "./email.service.js";

const register = async (request) => {
    let userRequest = validate(registerUserValidation, request);

    const user = await prismaClient.$transaction(async (prisma) => {
        const userCount = await prisma.users.count({
            where: {
                username: userRequest.username
            }
        });

        if (userCount > 0) {
            throw new ResponseError(400, "username already used")
        }

        userRequest.password = await bcrypt.hash(userRequest.password, 10);

        const emailToken = uuid().toString();

        return prisma.users.create({
            data: {
                id: uuid().toString(),
                username: userRequest.username,
                password: userRequest.password,
                email: userRequest.email,
                email_token: emailToken
            },
            select: {
                username: true,
                email: true,
                email_token: true
            }
        });
    });

    logger.info(`${getCurrentDate()} Success register user ${user.username}`);

    //Todo : Send email with email token to verify user
    sendEmail(user.email, user.email_token);

    return user
}

export default {
    register
}