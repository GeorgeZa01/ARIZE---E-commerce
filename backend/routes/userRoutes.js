import express from 'express';
import {deleteUserCon, updateUserCon, createUserCon, getuserscon } from '../controller/userController.js';

const router = express.Router();

// GET all users
router.get('/user', getuserscon);

// CREATE new user
router.post('/signup', createUserCon);
router.get('/', getuserscon);

// DELETE user by ID
router.delete('/:id', deleteUserCon);

// EDIT user by ID
router.patch('/:id', updateUserCon);

export default router;
