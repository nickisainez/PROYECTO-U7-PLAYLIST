import { Router } from "express";
import { playlist, createplaylist } from "./controller";

const playlistRouter: Router = Router();

playlistRouter.get("/", playlist);
playlistRouter.post("/", createplaylist);

export default playlistRouter;
