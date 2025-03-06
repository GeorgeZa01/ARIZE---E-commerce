import { pool } from '../config/config.js';

// 🛒 Get cart items for a user
export const getCartByUserId = async (userId) => {
    try {
        const [cartItems] = await pool.query(
            `SELECT * 
FROM arize_db.cart 
INNER JOIN arize_db.products ON arize_db.cart.product_id = arize_db.products.product_id 
INNER JOIN arize_db.users ON arize_db.cart.user_id = arize_db.users.user_id 
WHERE arize_db.cart.user_id = ?;
;
`,
            [userId]
        );

        return cartItems;
    } catch (error) {
        console.error("❌ Error fetching cart items:", error);
        throw new Error("Database error while retrieving cart items");
    }
};

// ➕ Add item to cart or update quantity
export const addCartItem = async (userId, productId, quantity) => {
    

        try {
            // Check if item is already in cart
            const [existing] = await pool.query(
                'SELECT quantity FROM cart WHERE user_id = ? AND product_id = ?',
                [userId, productId]
            );

            if (existing.length > 0) {
                // Update quantity if item exists
                await pool.query(
                    'UPDATE cart SET quantity = quantity + ? WHERE user_id = ? AND product_id = ?',
                    [quantity, userId, productId]
                );
                return { success: true, message: 'Cart updated' };
            } else {
                // Insert new item
                await pool.query(
                    'INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)',
                    [userId, productId, quantity]
                );
                return { success: true, message: 'Product added to cart' };
            }
        
    } catch (error) {
        console.error("❌ Error adding item to cart:", error);
        throw new Error("Database error while adding item to cart");
    }
};

// ❌ Remove item from cart
export const deleteCartItem = async (userId, cartId) => {
    try {
        const [result] = await pool.query(
            'DELETE FROM cart WHERE cart_id = ? AND user_id = ?',
            [cartId, userId]
        );

        if (result.affectedRows > 0) {
            return { success: true, message: 'Item removed from cart' };
        } else {
            return { success: false, message: 'Item not found in cart' };
        }
    } catch (error) {
        console.error("❌ Error removing item from cart:", error);
        throw new Error("Database error while removing item from cart");
    }
};

// 🔼🔽 Update quantity (increase or decrease)
export const updateCartItemQuantity = async (userId, productId, change) => {
        

        try {
            // Check current quantity
            const [cartItem] = await pool.query(
                'SELECT quantity FROM cart WHERE user_id = ? AND product_id = ?',
                [userId, productId]
            );

            if (cartItem.length === 0) {
                return { success: false, message: 'Item not found in cart' };
            }

            let newQuantity = cartItem[0].quantity + change;

            if (newQuantity <= 0) {
                // Remove item if quantity reaches 0
                await pool.query(
                    'DELETE FROM cart WHERE user_id = ? AND product_id = ?',
                    [userId, productId]
                );
                return { success: true, message: 'Item removed from cart' };
            } else {
                // Update quantity
                await pool.query(
                    'UPDATE cart SET quantity = ? WHERE user_id = ? AND product_id = ?',
                    [newQuantity, userId, productId]
                );
                return { success: true, message: 'Cart updated' };
            }
        
    } catch (error) {
        console.error("❌ Error updating cart quantity:", error);
        throw new Error("Database error while updating cart quantity");
    }
};
