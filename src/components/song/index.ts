import { Router } from "express";
import { findAll, store, findUnique } from "./controller";

const songRouter: Router = Router();

songRouter.get("/", findAll);
songRouter.post("/", store);
songRouter.get("/:id",findUnique)

export default songRouter;
