import { pool } from '../config/config.js';

const getProducts = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM arize_db.products');
        return rows;
    } catch (error) {
        console.error('Database error:', error);
        throw error; // Let the controller handle the error response
    }
};

const getLaptops = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM arize_db.products where Category ="Laptop"');
        return rows;
    } catch (error) {
        console.error('Database error:', error);
        throw error; // Let the controller handle the error response
    }
};
const getMonitors = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM arize_db.products where Category ="Monitors"');
        return rows;
    } catch (error) {
        console.error('Database error:', error);
        throw error; // Let the controller handle the error response
    }
};
const getPCtower = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM arize_db.products where Category ="PC Tower"');
        return rows;
    } catch (error) {
        console.error('Database error:', error);
        throw error; // Let the controller handle the error response
    }
};
const getAccessories = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM arize_db.products where Category ="Accessories"');
        return rows;
    } catch (error) {
        console.error('Database error:', error);
        throw error; // Let the controller handle the error response
    }
};
export { getProducts, getLaptops, getMonitors, getPCtower, getAccessories };
