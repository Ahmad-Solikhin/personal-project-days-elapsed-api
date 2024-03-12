import {ResponseError} from "../error/response-error.js";
import {logger} from "../application/logging.js";
import {getCurrentDate} from "../util/get-current-date.js";

export const errorMiddleware = async (err, req, res, next) => {
    if (!err) {
        next();
        return;
    }

    if (err instanceof ResponseError) {
        logger.warn(getCurrentDate() + err.message);

        res.status(err.status).json({
            error: err.message
        }).end();
    } else {
        logger.error(getCurrentDate() + err.message)

        res.status(500).json({
            error: err.message
        });
    }
}