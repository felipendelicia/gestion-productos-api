import { Response, Request } from "express";
import { connectDB } from "../database";
import { RowDataPacket } from "mysql2";
import colors from "../config/colors";
import config from "../config/config";
import jwt from "jsonwebtoken";

export async function login(req: Request, res: Response) {
  try {
    // Connecting the db
    const conn = await connectDB();

    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).json({res:"Todas las entradas son requeridas."});
    }

    // Validate if user exist in our database
    const mysql_response = await conn.query<RowDataPacket[]>(
      `SELECT * FROM accounts WHERE email = ? ;`,
      [email]
    );

    // User constant
    const user = mysql_response[0][0];

    if (user && password == user.password) {
      // Create token
      const token = jwt.sign({ id: user.id }, config.TOKEN_KEY!, {
        expiresIn: "2h",
      });

      // adding token to the object
      user.token = token;

      // console.log the login event
      console.log(colors.help(`[server]: ${user.user} loggued in`));

      // sending user with token
      res.status(200).json(user);
    } else res.status(404).json({res:"Credenciales invalidas"});
  } catch (err) {
    console.error(err);
  }
}
