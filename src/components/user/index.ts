import { Router } from "express";
import { create_user, login,listUser,DropUser,UpDateUser } from "./controller";

const userRouter: Router = Router();

userRouter.post("/", create_user);
userRouter.post("/login", login);
userRouter.get("/listUser", listUser);
userRouter.delete("/DropUser", DropUser);
userRouter.put("/UpDateUser/:id", UpDateUser);


export default userRouter;