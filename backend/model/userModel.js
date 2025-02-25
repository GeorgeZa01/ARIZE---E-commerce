import { pool } from '../config/config.js';
import bcrypt from 'bcryptjs';

export const getUsers = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        return rows;
    } catch (error) {
        console.error('Database error:', error);
        throw error; // Let the controller handle the error response
    }
};

// Create a new user
export const createUser = async (firstName, lastName, email, password, token) => {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password before saving
    const query = `
        INSERT INTO users (firstName, lastName, email, password, verificationToken, isVerified) 
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query(query, [firstName, lastName, email, hashedPassword, token, false]);
    return result;
};

// Find a user by email
export const findUserByEmail = async (email) => {
    const [user] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    return user.length ? user[0] : null;
};

// Verify user by token
export const verifyUser = async (token) => {
    const query = "UPDATE users SET isVerified = true WHERE verificationToken = ?";
    const [result] = await pool.query(query, [token]);
    return result;
};

