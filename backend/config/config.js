import mysql from 'mysql2/promise';
import { config } from 'dotenv';

config();

const pool = mysql.createPool({
    host: process.env.HOST || "127.0.0.1",
    user: process.env.USER || "root",
    password: process.env.PASSWORD || "Shafwan@1",
    database: process.env.DATABASE || "arize_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export { pool };