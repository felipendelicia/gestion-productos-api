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
      `SELECT * FROM accounts WHERE email=?;`,
      [email]
    );

    res.send(user[0])

  } catch (err) {
    console.log(err);
  }
}
