import { pool } from '../config/config.js';

const getProducts = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM products');
        return rows;
    } catch (error) {
        console.error('Database error:', error);
        throw error; // Let the controller handle the error response
    }
};


export { getProducts};
