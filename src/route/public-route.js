import homeController from "../controller/home-controller.js";
import express from "express";
import userController from "../controller/user-controller.js";

export const publicRoute = new express.Router();
publicRoute.get("/api", homeController.index);
publicRoute.post("/api/users/register", userController.register);