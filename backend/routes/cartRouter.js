import express from "express"
const router = express.Router();
import {addToCartCon,getCartItemsCon,removeFromCartCon,increaseQuantityCon} from '../controller/cartController.js';

router.post('/', addToCartCon);
router.get('/:userId', getCartItemsCon);
router.delete('/:cartId', removeFromCartCon);
router.put('/increase/:cartId', increaseQuantityCon);

export default router