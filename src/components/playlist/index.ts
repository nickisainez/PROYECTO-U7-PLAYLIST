import { Router } from "express";
import { findAll, store } from "./controller";

const playlistRouter: Router = Router();

playlistRouter.get("/", findAll);
playlistRouter.post("/", store);

export default playlistRouter;
