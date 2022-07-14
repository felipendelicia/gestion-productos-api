import { Request, Response, Router } from "express";
import verifyToken from "../middlewares/auth";
const clients_router = Router();

// LOGIN
clients_router
  .get("/", verifyToken, (req:Request, res:Response)=>{
    console.log('req.userID ', req.userId)
    res.status(200).send("Welcome 🙌 ")
  });

export default clients_router;
