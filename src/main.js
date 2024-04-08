import {web} from "./application/web.js";
import {logger} from "./application/logging.js";
import moment from "moment-timezone";
import {getCurrentDate} from "./util/get-current-date.js";

const port = process.env.PORT_APPLICATION;
moment.tz.setDefault("Asia/Jakarta");
web.listen(port, () => {
    logger.info(`${getCurrentDate()} App listen in port ${port}`);
});