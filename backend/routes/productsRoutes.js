import express from 'express';
import { getProductsCon, getLaptopsCon, getMonitorsCon, getPCtowerCon, getAccessoriesCon } from '../controller/productsController.js';

const router = express.Router();

// GET all products
router.get('/', getProductsCon);
router.get('/laptops', getLaptopsCon);
router.get('/monitors', getMonitorsCon);
router.get('/PCtower', getPCtowerCon);
router.get('/accessories', getAccessoriesCon);


export default router;
