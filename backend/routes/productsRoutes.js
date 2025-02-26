import express from 'express';
import { getProductsCon, getLaptopsCon, getMonitorsCon, getPCtowerCon, getAccessoriesCon, deleteProductCon, addProductCon, updateProductCon, getSingleProductCon } from '../controller/productsController.js';

const router = express.Router();

// GET all products
router.get('/', getProductsCon);
router.get('/laptops', getLaptopsCon);
router.get('/monitors', getMonitorsCon);
router.get('/PCtower', getPCtowerCon);
router.get('/accessories', getAccessoriesCon);

// DELETE a product by ID
router.delete('/:id', deleteProductCon);


// POST a new product
router.post('/', addProductCon);

// PATCH a product by ID
router.patch("/:id", updateProductCon); 

// GET single product
router.get('/:productId', getSingleProductCon);





export default router;
