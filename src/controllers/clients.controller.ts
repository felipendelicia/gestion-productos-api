import { Response, Request } from "express";
import { connectDB } from "../database";
import { RowDataPacket } from "mysql2";
import colors from "../config/colors";
import config from "../config/config";
import jwt from 'jsonwebtoken'

interface IPayload {
  id: string;
  iat: number;
  exp: number;
}

export async function getallclients(req: Request, res: Response) {
  try {
    //connect with the db
    const conn = await connectDB();

    const token = req.header('token')

    const payload = jwt.verify(token!, config.TOKEN_KEY!) as IPayload

    const company_id = await conn.query<RowDataPacket[]>(
        `SELECT company_id FROM accounts WHERE id = ?;`,
        [payload.id]
      );

    console.log(company_id)

  } catch (err) {
    console.log(err);
  }
}

export async function getclient(req: Request, res: Response) {
  res.send("onwork!");
}

export async function deleteclient(req: Request, res: Response) {
  res.send("onwork!");
}

export async function editclient(req: Request, res: Response) {
  res.send("onwork!");
}

export async function postclient(req: Request, res: Response) {
  res.send("onwork!");
}
