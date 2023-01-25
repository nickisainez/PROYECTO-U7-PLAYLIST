import express, { type Application } from "express";
import { songRouter, userRouter, playlistRouter  } from "./components";
import cors from "cors";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.json());

app.use("/api/v1/users", userRouter );
// app.use("/api/v1/users/login", userRouter);
app.use("/api/v1/songs", songRouter);
app.use("/api/v1/playlist", playlistRouter);
app.use("/api/v1/songs/:id", songRouter)

export default app;
