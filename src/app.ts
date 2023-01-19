import express, { type Application } from "express";
import { userRouter, songRouter, playlistRouter  } from "./components";

const app: Application = express();

app.use(express.json());

app.use("/api/v1/users", userRouter );
app.use("/api/v1/users/login", userRouter);
app.use("/api/v1/songs", songRouter);
app.use("/api/v1/playlist", playlistRouter);
app.use("/api/v1/songs/:id", playlistRouter)

export default app;