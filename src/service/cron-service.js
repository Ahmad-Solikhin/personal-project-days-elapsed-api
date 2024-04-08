import cron from "node-cron";
import {loggerInfo} from "../util/logging-util.js";
import {prismaClient} from "../application/database.js";

export const schedulerJob = cron.schedule("* * * * *", async () => {
    //Todo : Run job every day at 7 pm, check if today is days of or not, if not do the job if today not finished yet by user
    const users = await prismaClient.users.findMany({
        select: {
            id: true, username: true
        }
    });

    for (const user of users) {
        loggerInfo(`Id => ${user.id}, username => ${user.username}`);
    }
    loggerInfo("Hai There");
}, {
    scheduled: true, timezone: process.env.TZ
});