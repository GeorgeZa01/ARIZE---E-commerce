import { pool } from "../config/config.js";
import bcryptjs from "bcryptjs";


// Function to create a new user
export const createUser = async ({full_name, email, password, address}) => {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        throw new Error("User already exists");
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const [rows] = await pool.query("INSERT INTO users (full_name, email, password, address) VALUES (?, ?, ?,?)", [full_name, email, hashedPassword, address]);
    return rows.insertId;
};


export const findUserByEmail = async (email) => {
    const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    return users.length > 0 ? users[0] : null;
};

export const getSingleUser = async (email) => {
    const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    return users.length > 0 ? users[0] : null;
}

 const getUsers = async () => {
    try {
        console.log("Fetching users from DB...");
        const [rows] = await pool.query('SELECT * FROM users');
        console.log("Users fetched:", rows);
        return rows;
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};

const deleteUser = async (userId) => {
    try {
        const [result] = await pool.query('DELETE FROM users WHERE user_id = ?', [userId]);

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
        const [result] = await pool.query('UPDATE users SET ? WHERE user_id = ?', [userData, userId]);
        if (result.affectedRows === 0) {
            throw new Error(`No user found with ID: ${userId}`);
        }
        return { message: `User with ID: ${userId} updated successfully.` };
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};

export const fetchDataForUser = async (userId) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE user_id = ?', [userId]);
        return rows[0];
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};

export { getUsers, deleteUser, updateUser };
