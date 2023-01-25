import { Router } from "express";
import { findAll, store, findUnique, findPublic } from "./controller";
import { authorizationMiddleware } from "../middleware"

const songRouter: Router = Router();

songRouter.get("/", findAll);
songRouter.get("/find" , findPublic , authorizationMiddleware);
songRouter.post("/", store);
songRouter.get("/:id",findUnique)

export default songRouter;
