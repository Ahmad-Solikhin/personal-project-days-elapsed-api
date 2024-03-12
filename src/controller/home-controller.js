import {logger} from "../application/logging.js";
import {getCurrentDate} from "../util/get-current-date.js";

const index = async (req, res) => {
    logger.info("Accessing home controller");
    res.status(200).send(`Welcome to days elapsed project at ${getCurrentDate()}`);
}

export default {
    index
}