import { createUser, findUserByEmail, verifyUser } from '../model/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

const SECRET_KEY = process.env.JWT_SECRET_KEY;
const transporter = nodemailer.createTransport({ /* Email setup */ });

// Signup controller
export const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const existingUser = await findUserByEmail(email);
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const token = crypto.randomBytes(32).toString('hex'); // Generate token for email verification

        // Create user with the hashed password and token
        await createUser(firstName, lastName, email, password, token);

        const verificationURL = `http://localhost:3030/api/auth/verify-email?token=${token}`;

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Verify Your Email',
            html: `<p>Click <a href="${verificationURL}">here</a> to verify your email.</p>`,
        });

        res.status(201).json({ message: 'User created successfully! Please check your email to verify.' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        console.error(error);
    }
};

// Login controller
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await findUserByEmail(email);
        if (!user) return res.status(404).json({ message: "User not found" });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: "Invalid credentials" });

        if (!user.isVerified) {
            return res.status(400).json({ message: "Please verify your email first" });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        console.error(error);
    }
};

// Verify email controller
export const verifyEmail = async (req, res) => {
    const { token } = req.query;

    try {
        const result = await verifyUser(token);
        if (result.affectedRows === 0) {
            return res.status(400).json({ message: "Invalid or expired token" });
        }

        res.status(200).json({ message: "Email verified successfully" });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
        console.error(error);
    }
};
