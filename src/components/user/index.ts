import { Router } from "express";
import { create_user, login,listUser,DropUser } from "./controller";

const userRouter: Router = Router();

userRouter.post("/", create_user);
userRouter.post("/login", login);
userRouter.get("/listUser", listUser);
userRouter.delete("/DropUser", DropUser);

export default userRouter;