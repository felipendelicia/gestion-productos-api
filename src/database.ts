import { createPool } from "mysql2/promise";
import config from "./config/config";

export async function connectDB() {
  const connection = await createPool({
    host: config.HOST,
    user: config.DB_USER,
    password: config.DB_PASS,
    database: config.DATABASE,
    connectionLimit: 10
  });

  return connection;
}
