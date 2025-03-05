import express from 'express';
import { deleteUserCon, updateUserCon, createUserCon, getUsersCon, loginUser, refreshAccessToken } from '../controller/userController.js';
import { verifyToken } from "../middleware/authToken.js";
const router = express.Router();

// GET all users
router.get('/', getUsersCon);

// CREATE new user
router.post('/signup', createUserCon);

// GET user by ID
router.get('/login', loginUser);

// DELETE user by ID
router.delete('/:id', deleteUserCon);

// EDIT user by ID
router.patch('/:id', updateUserCon);

//login route
router.post("/login", loginUser);
router.post("/refresh-token", refreshAccessToken);
router.get("/protected-route", verifyToken, (req, res) => {
    res.status(200).json({ success: true, message: "You have access!", user: req.user });
});


export default router;
