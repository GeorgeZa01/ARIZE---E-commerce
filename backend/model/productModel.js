import { pool } from '../config/config.js';


const searchProducts = async (searchQuery) => {
    try {  
        const [rows] = await pool.query(
            'SELECT * FROM bxs5waahvka4quoqwk7p.products WHERE Name LIKE ? OR Description LIKE ?',
            [`%${searchQuery}%`, `%${searchQuery}%`]
        );
        return rows;
    } catch (error) {
        console.error('Database error in searchProducts:', error);
        throw error;
    }
};

const getProducts = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM bxs5waahvka4quoqwk7p.products');
        return rows;
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};

const getLaptops = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM bxs5waahvka4quoqwk7p.products WHERE Category = "Laptop"');
        return rows;
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};

const getMonitors = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM bxs5waahvka4quoqwk7p.products WHERE Category = "Monitors"');
        return rows;
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};

const getPCtower = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM bxs5waahvka4quoqwk7p.products WHERE Category = "PC Tower"');
        return rows;
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};

const getAccessories = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM bxs5waahvka4quoqwk7p.products WHERE Category = "Accessories"');
        return rows;
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};

const deleteProduct = async (productId) => {
    try {
        const [result] = await pool.query('DELETE FROM bxs5waahvka4quoqwk7p.products WHERE product_id = ?', [productId]);

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
        const [result] = await pool.query('INSERT INTO bxs5waahvka4quoqwk7p.products SET ?', [product]);
        return result;
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};

const updateProduct = async (productId, productData) => {
    try {
        const [result] = await pool.query(
            "UPDATE bxs5waahvka4quoqwk7p.products SET ? WHERE product_id = ?",
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
        if (!productId || isNaN(productId)) {
            throw new Error('Invalid product ID');
        }
        const [rows] = await pool.query('SELECT * FROM bxs5waahvka4quoqwk7p.products WHERE product_id = ?', [productId]);
        if (rows.length === 0) {
            throw new Error(`Product with ID ${productId} not found`);
        }
        return rows[0];
    } catch (error) {
        console.error('Database error in getSingleProduct:', error);
        throw new Error('Error fetching the product');
    }
};

export { 
    getProducts, getLaptops, getMonitors, getPCtower, getAccessories, 
    deleteProduct, addProduct, updateProduct, getSingleProduct, searchProducts 
};
