import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "@/config";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

export default pool;
