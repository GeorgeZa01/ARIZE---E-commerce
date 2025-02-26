import { pool } from "../config/config.js";
import bcrypt from "bcrypt";

export const getusers = async () => {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
};

// Function to create a new user
export const createUser = async ({full_name, email, password}) => {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const [rows] = await pool.query("INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)", [full_name, email, hashedPassword]);
    return rows.insertId;
};


export const findUserByEmail = async (email) => {
    const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    return users.length > 0 ? users[0] : null;
};

 const getUsers = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        return rows;
    } catch (error) {
        console.error('Database error:', error);
        throw error; // Let the controller handle the error response
    }
};
const deleteUser = async (userId) => {
    try {
        const [result] = await pool.query('DELETE FROM arize_db.users WHERE user_id = ?', [userId]);

        if (result.affectedRows === 0) {
            throw new Error(`No user found with ID: ${userId}`);
        }

        return { message: `User with ID: ${userId} deleted successfully.` };
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};

const updateUser = async (userId, userData) => {
    try {
        const [result] = await pool.query('UPDATE arize_db.users SET ? WHERE user_id = ?', [userData, userId]);
        if (result.affectedRows === 0) {
            throw new Error(`No user found with ID: ${userId}`);
        }
        return { message: `User with ID: ${userId} updated successfully.` };
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};

export { getUsers, deleteUser, updateUser };
