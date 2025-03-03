// import { pool } from '../config/config.js';

// // Add item to cart
// const addToCart = async (userId, productId, quantity) => {
//     try {
//         const [existing] = await pool.query(
//             'SELECT * FROM cart WHERE user_id = ? AND product_id = ?',
//             [userId, productId]
//         );

//         if (existing.length > 0) {
//             await pool.query(
//                 'UPDATE cart SET quantity = quantity + ? WHERE user_id = ? AND product_id = ?',
//                 [quantity, userId, productId]
//             );
//             return { success: true, message: 'Cart updated' };
//         } else {
//             await pool.query(
//                 'INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)',
//                 [userId, productId, quantity]
//             );
//             return { success: true, message: 'Product added to cart' };
//         }
//     } catch (error) {
//         throw error;
//     }
// };

// // View all items in cart
// const getCartItems = async (userId) => {
//     try {
//         const [rows] = await pool.query(
//             `SELECT cart.id, cart.quantity, products.name, products.price, products.image
//              FROM cart 
//              JOIN products ON cart.product_id = products.id
//              WHERE cart.user_id = ?`,
//             [userId]
//         );
//         return rows;
//     } catch (error) {
//         throw error;
//     }
// };

// // Remove item from cart
// const removeFromCart = async (cartId) => {
//     try {
//         await pool.query('DELETE FROM cart WHERE id = ?', [cartId]);
//         return { success: true, message: 'Item removed from cart' };
//     } catch (error) {
//         throw error;
//     }
// };

// // Increase quantity by 1
// const increaseQuantity = async (cartId) => {
//     try {
//         await pool.query('UPDATE cart SET quantity = quantity + 1 WHERE id = ?', [cartId]);
//         return { success: true, message: 'Quantity increased' };
//     } catch (error) {
//         throw error;
//     }
// };

// export {addToCart,getCartItems,removeFromCart,increaseQuantity}