import express from 'express';
import {
    
    handleAddToCart,
    handleRemoveFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    getCartItemsCon
} from '../controller/cartController.js';

const router = express.Router();
router.get('/:userId', getCartItemsCon); // Get cart items
router.post('/add', handleAddToCart); // Add to cart
router.delete('/delete/:cartId', handleRemoveFromCart); // Remove item
router.put('/update/increase/:cartId', handleIncreaseQuantity); // Increase quantity
router.put('/update/decrease/:cartId', handleDecreaseQuantity); // Decrease quantity

export default router;
