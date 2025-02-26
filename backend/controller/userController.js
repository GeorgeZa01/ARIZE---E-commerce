import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { findUserByEmail, createUser } from "../model/userModel.js";

export const signup = async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        if (await findUserByEmail(email)) {
            return res.status(400).json({ message: "Email already registered!" });
        }

        await createUser(fullName, email, password);
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await findUserByEmail(email);
        if (!user) return res.status(400).json({ message: "User not found!" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials!" });

        const token = jwt.sign({ userId: user.id }, "your_secret_key", { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful!", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
