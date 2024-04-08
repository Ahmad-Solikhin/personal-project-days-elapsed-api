import {web} from "./application/web.js";
import moment from "moment-timezone";
import {loggerInfo} from "./util/logging-util.js";
import {schedulerJob} from "./service/cron-service.js";

const port = process.env.PORT_APPLICATION;
moment.tz.setDefault(process.env.TZ);
schedulerJob;
web.listen(port, () => {
    loggerInfo(`App listen in port ${port}`);
});