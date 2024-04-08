import {logger} from "../application/logging.js";
import {getCurrentDate} from "./get-current-date.js";

const loggerInfo = (message) => {
    logger.info(getCurrentDate() + " " + message);
}
const loggerWarn = () => {
    logger.warn(getCurrentDate() + " " + message);
}
const loggerError = () => {
    logger.error(getCurrentDate() + " " + message);
}

export {
    loggerInfo,
    loggerWarn,
    loggerError
}