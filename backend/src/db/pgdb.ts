import env from "../utils/validate";
import { Pool } from "pg";

export const pool = new Pool({
  connectionString: env.DB_URL,
});

export async function testConnection() {
  try {
    const client = await pool.connect();
    console.log("Connected to PostgreSQL database successfully!");
    client.release();
  } catch (err) {
    console.error("Error connecting to PostgreSQL database:", err);
  }
}
