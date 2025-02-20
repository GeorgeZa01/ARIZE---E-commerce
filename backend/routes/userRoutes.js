import express from 'express';
import { getUserCon } from '../controller/userController.js';

const router = express.Router();

// GET all users
router.get('/', getUserCon);


export default router;