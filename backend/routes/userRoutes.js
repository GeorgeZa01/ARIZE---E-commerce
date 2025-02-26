import express from 'express';
import { getUserCon, deleteUserCon, updateUserCon } from '../controller/userController.js';

const router = express.Router();

// GET all users
router.get('/', getUserCon);

// DELETE user by ID
router.delete('/:id', deleteUserCon);

// EDIT user by ID
router.patch('/:id', updateUserCon);

export default router;
