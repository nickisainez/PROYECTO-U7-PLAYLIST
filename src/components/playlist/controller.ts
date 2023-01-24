import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const allplaylist = async (_req: Request, res: Response): Promise<void> => {
    try {
      const playlists = await prisma.playlist.findMany({
        include: {songs : true}
      });
  
      res.status(200).json({
        ok: true,
        data: playlists,
      });
    } catch (error) {
      res.status(500).json({ ok: false, message: error });
    }
  };

export const createplaylist = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, user } = req.body;
  
      await prisma.playlist.create({
        data: {
          name,
          user: {connect: {id: user}},
                    
        },
      });
  
      res.status(201).json({ ok: true, message: "Playlist creada correctamente" });
    } catch (error) {
      res.status(500).json({ ok: false, message: error });
    }
  };

export const addsongtoplaylist = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;

    await prisma.playlist.update({
      where:{
        id: data.id_playlist
      },
      include: {
        songs: true,
      },
      data: {
        songs: { connect: { id: data.id_song } }
      }
    });
    res.status(201).json({ ok: true, message: "Canción agregada"});

  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};