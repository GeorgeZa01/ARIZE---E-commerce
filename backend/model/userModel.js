import { pool } from "../config/config.js";
import bcrypt from "bcrypt";

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
