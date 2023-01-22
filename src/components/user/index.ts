import { Router } from "express";
import { create_user, login,listUser,DropUser,UpDateUser } from "./controller";
import { authorizationMiddleware } from "../middleware"

const userRouter: Router = Router();

userRouter.post("/", create_user);
userRouter.post("/login", login);
userRouter.get("/listUser", authorizationMiddleware, listUser );
userRouter.delete("/DropUser", DropUser);
userRouter.put("/UpDateUser/:id", UpDateUser);

export default userRouter;