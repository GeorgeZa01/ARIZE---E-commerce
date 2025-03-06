import express from 'express';
import { authenticateToken } from '../middleware/authToken.js';
import {
    
    handleAddToCart,
    handleRemoveFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    getCartItemsCon
} from '../controller/cartController.js';

const router = express.Router();
router.get('/:userId',authenticateToken, getCartItemsCon); // Get cart items
router.post('/add',authenticateToken, handleAddToCart); // Add to cart
router.delete('/delete/:cartId',authenticateToken, handleRemoveFromCart); // Remove item
router.put('/update/increase/:cartId',authenticateToken, handleIncreaseQuantity); // Increase quantity
router.put('/update/decrease/:cartId',authenticateToken, handleDecreaseQuantity); // Decrease quantity

export default router;
