import mysql from 'mysql2/promise';
import { config } from 'dotenv';

config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER ,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export { pool };

export const API_URL = "https://arize-e-commerce.onrender.com"