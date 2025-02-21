import express from "express";
import { forgotPassword, resetPassword, getusers } from "../controller/forgotController.js";

const router = express.Router();

router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/get-users", getusers);

export default router;
