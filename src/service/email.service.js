import nodemailer from "nodemailer";
import {logger} from "../application/logging.js";

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b5435dab4f6b06",
        pass: "f595a5a274dd16"
    }
});

export const sendEmail = async (email, token) => {
    const mailData = {
        from: 'from@example.com',  // sender address
        to: email,   // list of receivers
        subject: `Test sending email with token ${token}`,
        text: 'That was easy!',
        html: '<b>Hey there! </b> <br> This is our first message sent with Nodemailer<br/>',
    };

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            logger.error(err)
        else
            logger.info(info);
    });
}