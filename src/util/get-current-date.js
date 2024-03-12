import moment from "moment-timezone";

export const getCurrentDate = () => {
    return moment().format("DD-MM-YYYY HH:mm:ss");
}

