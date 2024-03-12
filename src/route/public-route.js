import homeController from "../controller/home-controller.js";
import express from "express";

export const publicRoute = new express.Router();
publicRoute.get("/api", homeController.index);