import { Response, Request } from "express";
import { connectDB } from "../database";

export async function login(req: Request, res: Response) {
  try {
    const conn = await connectDB();

    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("Todas las entradas son requeridas!");
    }

    const user = await conn!.query(
      `SELECT * FROM accounts WHERE email='fernandodelicia@gmail.com';`
    );

    res.send(user)

  } catch (err) {
    console.log(err);
  }
}
