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

const deleteProduct = async (productId) => {
    try {
        const [result] = await pool.query('DELETE FROM arize_db.products WHERE product_id = ?', [productId]);

        if (result.affectedRows === 0) {
            throw new Error(`No product found with ID: ${productId}`);
        }

        return { message: `Product with ID: ${productId} deleted successfully.` };
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};
const addProduct = async (product) => {
    try {
        const [result] = await pool.query('INSERT INTO arize_db.products SET ?', [product]);
        return result;
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};

const updateProduct = async (productId, productData) => {
    try {
        const [result] = await pool.query(
            "UPDATE arize_db.products SET ? WHERE product_id = ?",
            [productData, productId]
        );
        return result;
    } catch (error) {
        console.error("Database error:", error);
        throw error;
    }
};
const getSingleProduct = async (productId) => {
    try {
        // Validate productId
        if (!productId || isNaN(productId)) {
            throw new Error('Invalid product ID');
        }
        // Query the database for the product
        const [rows] = await pool.query('SELECT * FROM arize_db.products WHERE product_id = ?', [productId]);
        // If no product is found, throw an error
        if (rows.length === 0) {
            throw new Error(`Product with ID ${productId} not found`);
        }
        return rows[0]; // Return the first product (should only be one)
    } catch (error) {
        console.error('Database error in getSingleProduct:', error);
        throw new Error('Error fetching the product');
    }
};
export { getProducts, getLaptops, getMonitors, getPCtower, getAccessories, deleteProduct, addProduct,updateProduct, getSingleProduct };
