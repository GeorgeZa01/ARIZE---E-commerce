import {pool} from "../config/config.js";
import bcrypt from "bcryptjs";

// Function to check if user exists
export const findUserByEmail = async (email) => {
  const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows.length > 0 ? rows[0] : null;
};

// Function to create a new user
export const createUser = async (username, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const [result] = await pool.query(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, hashedPassword]
  );
  return result.insertId;
};

  