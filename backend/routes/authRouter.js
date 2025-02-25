import express from 'express';
import { signup, login, verifyEmail } from '../controller/authController.js';

const router = express.Router();

router.post('/signup', signup); // For user registration
router.post('/login', login);   // For user login
router.get('/verify-email', verifyEmail); // For email verification

export default router;
