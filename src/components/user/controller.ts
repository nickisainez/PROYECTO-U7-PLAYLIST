import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { networkInterfaces } from "os";

const prisma = new PrismaClient();
const  bcrypt  =  require ('bcrypt') ;
//Listado de usuarios
export const listUser = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({
      ok: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};

//Registrar un nuevo usuario con password hasheado
export const create_user = async (req: Request, res: Response): Promise<void> => {
    try {
      const {name ,email ,password ,date_born } = req.body;
      const password_hash = await bcrypt.hash(password , 8)
      await prisma.user.create({ 
        data:{ name , email , password : password_hash , date_born: new Date(date_born)} 
    });
      res.status(201).json({ ok: true, message: "user created successfully" });
    } catch (error) {
      console.log(error)
      res.status(500).json({ ok: false, message: error });
    }
  };

  //Login
export const login = async (req: Request, res: Response): Promise<void> => {
  try{
    const { email, password} = req.body
    const userLogin = await prisma.user.findFirst( { where : { email : email } } )
    if (userLogin){
      const comparePass = await bcrypt.compare(password,userLogin.password)
      if (comparePass){
        //await prisma.user.update({ where:{id : userLogin.id}})
        res.status(200).json({messaje:"Valid email and pass"})
      }else{
        res.status(404).json({messaje:"Invalid Pass"})
      }
    }else{
      res.status(404).json({messaje:"User not found"})
    }
  }catch(e){
    res.status(500).send("Fatal error")
  }
};


//Eliminar Usuarios

export const DropUser = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.deleteMany();
    res.status(200).json({
      ok: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};