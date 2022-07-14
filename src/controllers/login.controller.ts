import { Response, Request } from "express";
import { connectDB } from "../database";
import { RowDataPacket } from "mysql2";
import config from "../config/config";
import jwt from "jsonwebtoken";

export async function login(req: Request, res: Response) {
  const conn = await connectDB();

  // Get user input
  const { email, password } = req.body;

  // Validate user input
  if (!(email && password)) {
    res.status(400).send("Todas las entradas son requeridas.");
  }

  // Validate if user exist in our database
  const mysql_response = await conn.query<RowDataPacket[]>(
    `SELECT * FROM accounts WHERE email = ? ;`,
    [email]
  );

  const user = mysql_response[0][0];

  if (user && password == user.password) {
    // Create token
    const token = jwt.sign({ userId: user.id, email }, config.TOKEN_KEY!, {
      expiresIn: "2h",
    });
    // save user token
    user.token = token;
    // user
    res.status(200).json(user);
  } else {
    res.status(400).send("Credenciales invalidas");
  }
}
