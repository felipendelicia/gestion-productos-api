import { Router, Request, Response } from "express";
import { connectDB } from "../database";
const login_router = Router();

// LOGIN
login_router.post("/login", async (req: Request, res: Response) => {
  try {

    const conn = await connectDB();
    await conn!.connect();

    const email = req.body.email
    const password = req.body.password

    if (!(email && password)) {
      res.status(400).send("Todas las entradas son requeridas!");
    }

    await conn!.query("SELECT * from companies;", (error, results) => {
      if (error) throw error;
      console.log(results);
    });

    await conn!.end();

  }

  catch (err) {

    console.log(err);
    
  }
});

export default login_router;
