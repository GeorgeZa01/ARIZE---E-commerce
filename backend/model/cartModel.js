import { pool } from '../config/config.js';

// Get cart items for a user
const getCartItems = async (user_id) => {
    try {
        const [rows] = await pool.query(
            `SELECT * 
FROM cart 
INNER JOIN products ON cart.product_id = products.product_id 
INNER JOIN users ON cart.user_id = users.user_id 
WHERE cart.user_id = ?;
;
`,
            [user_id],
        );
        return rows;
    } catch (error) {
        console.error('Error fetching cart items:', error);  // Log the error details for better debugging
        throw error;
    }
};

// Add item to cart or update quantity
async function addToCart(userId, productId, quantity) {
    try {
        const [existing] = await pool.query(
            'SELECT * FROM cart WHERE user_id = ? AND product_id = ?',
            [userId, productId]
        );

        if (existing.length > 0) {
            await pool.query(
                'UPDATE cart SET quantity = quantity + ? WHERE user_id = ? AND product_id = ?',
                [quantity, userId, productId]
            );
            return { success: true, message: 'Cart updated' };
        } else {
            await pool.query(
                'INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)',
                [userId, productId, quantity]
            );
            return { success: true, message: 'Product added to cart' };
        }
    } catch (error) {
        throw error;
    }
}



// Remove item from cart
const removeFromCart = async (cartId) => {
    try {
        await pool.query('DELETE FROM cart WHERE cart_id = ?', [cartId]);
        return { success: true, message: 'Item removed from cart' };
    } catch (error) {
        throw error;
    }
};

// Increase quantity
const increaseQuantity = async (cartId) => {
    try {
        await pool.query('UPDATE cart SET quantity = quantity + 1 WHERE cart_id = ?', [cartId]);
        return { success: true, message: 'Quantity increased' };
    } catch (error) {
        throw error;
    }
};

// Decrease quantity
const decreaseQuantity = async (cartId) => {
    try {
        const [result] = await pool.query('SELECT quantity FROM cart WHERE cart_id = ?', [cartId]);

        if (result.length > 0 && result[0].quantity > 1) {
            await pool.query('UPDATE cart SET quantity = quantity - 1 WHERE cart_id = ?', [cartId]);
            return { success: true, message: 'Quantity decreased' };
        } else {
            await removeFromCart(cartId); // Remove if quantity is 1
            return { success: true, message: 'Item removed from cart' };
        }
    } catch (error) {
        throw error;
    }
};

export { getCartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity };
