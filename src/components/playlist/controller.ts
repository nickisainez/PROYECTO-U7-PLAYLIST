import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const playlist = async (_req: Request, res: Response): Promise<void> => {
    try {
      const playlist = await prisma.playlist.findMany();
  
      res.status(200).json({
        ok: true,
        data: playlist,
      });
    } catch (error) {
      res.status(500).json({ ok: false, message: error });
    }
  };

  export const createplaylist = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, userId, songId} = req.body;
  
      await prisma.playlist.create({
        data: {
          name,
          userId,
          songId
        },
      });
  
      res.status(201).json({ ok: true, message: "Playlist creada correctamente" });
    } catch (error) {
      res.status(500).json({ ok: false, message: error });
    }
  };

