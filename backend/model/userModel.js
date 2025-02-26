import { pool } from "../config/config.js";
import bcrypt from "bcrypt";

export const findUserByEmail = async (email) => {
    const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    return users.length > 0 ? users[0] : null;
};

export const getUsers = async () => {
    const [users] = await pool.query("SELECT * FROM users");
    return users;
};

export const createUser = async (full_name, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
        "INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)",
        [full_name, email, hashedPassword]
    );
};
