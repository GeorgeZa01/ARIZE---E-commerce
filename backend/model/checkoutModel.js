// import {pool} from '../config/config.js'

//  // Get cart items for a user
// const getCartItems = async (userId) => {
//     try {
//         const [rows] = await pool.query(
//             'SELECT c.product_id, c.quantity, p.name, p.price FROM cart c JOIN products p ON c.product_id = p.id WHERE c.user_id = ?',
//             [userId]
//         );
//         return rows;
//     } catch (error) {
//         throw error;
//     }
// };

// // Create a new order
// const createOrder = async (userId, totalAmount, paymentMethod, status) => {
//     try {
//         const [result] = await pool.query(
//             'INSERT INTO orders (user_id, total_amount, payment_method, status) VALUES (?, ?, ?, ?)',
//             [userId, totalAmount, paymentMethod, status]
//         );
//         return result.insertId;
//     } catch (error) {
//         throw error;
//     }
// };

// // Save order items
// const saveOrderItems = async (orderId, cartItems) => {
//     try {
//         const insertValues = cartItems.map(({ product_id, quantity, price }) => [orderId, product_id, quantity, price]);
//         await pool.query(
//             'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ?',
//             [insertValues]
//         );
//     } catch (error) {
//         throw error;
//     }
// };

// // Clear cart after checkout
// const clearCart = async (userId) => {
//     try {
//         await pool.query('DELETE FROM cart WHERE user_id = ?', [userId]);
//     } catch (error) {
//         throw error;
//     }
// };

// const updateOrderStatus = async (orderId, status) => {
//     await pool.query('UPDATE orders SET payment_status = ? WHERE id = ?', [status, orderId]);
// };

// export { getCartItems, createOrder, saveOrderItems, clearCart , updateOrderStatus};