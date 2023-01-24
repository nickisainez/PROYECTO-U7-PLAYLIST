import { Router } from "express";
import { allplaylist, createplaylist, addsongtoplaylist } from "./controller";

const playlistRouter: Router = Router();

playlistRouter.get("/", allplaylist);
playlistRouter.post("/", createplaylist);
playlistRouter.post("/add", addsongtoplaylist);


export default playlistRouter;