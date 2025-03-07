import {getCartItems,addToCart,removeFromCart,increaseQuantity,decreaseQuantity} from '../model/cartModel.js';

export const getCartItemsCon = async (req, res) => {
    try {
        const { userId } = req.params;  // Extract userId from the URL parameter
        const rows = await getCartItems(userId);
        
          // Pass it to the model function
        res.json(rows);  // Return the results
    } catch (error) {
        console.error(error);  // Log the error for easier debugging
        res.status(500).send('Error fetching cart items');
    }
};

export const handleAddToCart = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        const result = await addToCart(userId, productId, quantity);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add to cart' });
    }
};

export const handleRemoveFromCart = async (req, res) => {
    try {
        const { cartId } = req.params;
        const result = await removeFromCart(cartId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to remove item from cart' });
    }
};

export const handleIncreaseQuantity = async (req, res) => {
    try {
        const { cartId } = req.params;
        const result = await increaseQuantity(cartId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to increase quantity' });
    }
};

export const handleDecreaseQuantity = async (req, res) => {
    try {
        const { cartId } = req.params;
        const result = await decreaseQuantity(cartId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to decrease quantity' });
    }
};

