import {addToCart,getCartItems,removeFromCart,increaseQuantity } from '../model/cartModel.js';
import {pool} from '../config/config.js'
// Add item to cart
const addToCartCon = async (userId, productId, quantity) => {
    try {
        const [existing] = await pool.query(
            'SELECT * FROM cart WHERE user_id = ? AND product_id = ?',
            [userId, productId]
        );

        if (existing.length > 0) {
            await increaseQuantity(userId, productId, quantity);
            return { success: true, message: 'Cart updated' };
        } else {
            await addToCart(userId, productId, quantity);
            return { success: true, message: 'Product added to cart' };
        }
    } catch (error) {
        throw error;
    }
};

// View all items in cart
const getCartItemsCon = async (userId) => {
    try {
        const [rows] = await getCartItems(userId)
        return rows;
    } catch (error) {
        throw error;
    }
};

// Remove item from cart
const removeFromCartCon = async (cartId) => {
    try {
        await removeFromCart(cartId);
        return { success: true, message: 'Item removed from cart' };
    } catch (error) {
        throw error;
    }
};

// Increase quantity by 1
const increaseQuantityCon = async (cartId) => {
    try {
        await increaseQuantity(cartId)
        return { success: true, message: 'Quantity increased' };
    } catch (error) {
        throw error;
    }
};

export{addToCartCon,getCartItemsCon,removeFromCartCon,increaseQuantityCon}