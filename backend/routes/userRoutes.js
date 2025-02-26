import express from 'express';
import { getUserCon, deleteUserCon, updateUserCon } from '../controller/userController.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", login);

// DELETE user by ID
router.delete('/:id', deleteUserCon);

// EDIT user by ID
router.patch('/:id', updateUserCon);

export default router;
