import express from 'express';
import { getProductsCon } from '../controller/productsController.js';

const router = express.Router();

// GET all products
router.get('/', getProductsCon);



export default router;
