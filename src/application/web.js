import express from "express";
import {errorMiddleware} from "../middleware/error-middleware.js";
import {publicRoute} from "../route/public-route.js";

export const web = express();

web.use(express.json());
web.use(publicRoute);
web.use(errorMiddleware);