import express from 'express';
import {deleteUserCon, updateUserCon, createUserCon, getUsersCon } from '../controller/userController.js';

const router = express.Router();

// GET all users
router.get('/', getUsersCon);

// CREATE new user
router.post('/signup', createUserCon);

// DELETE user by ID
router.delete('/:id', deleteUserCon);

// EDIT user by ID
router.patch('/:id', updateUserCon);

export default router;
