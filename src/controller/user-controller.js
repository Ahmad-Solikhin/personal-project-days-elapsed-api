import {logger} from "../application/logging.js";
import {getCurrentDate} from "../util/get-current-date.js";
import userService from "../service/user-service.js";

const register = async (req, res, next) => {
    try {
        const result = await userService.register(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        logger.info(`${getCurrentDate()} unsuccessful register user`);
        next(e);
    }

}

export default {
    register
}