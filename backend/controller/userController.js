import {findUserByEmail, deleteUser, updateUser, createUser, getUsers} from '../model/userModel.js';
import { generateAccessToken, generateRefreshToken  } from '../utils/jwtUtils.js';
import { compare } from 'bcrypt'

//User registration
export const createUserCon = async (req, res) => {
    try {
        const userData = req.body;
        const result = await createUser(userData);
        res.json(result);
    } catch (error) {
        console.error('Error in createUser:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//Login for users
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await findUserByEmail(email);
        if (user.length === 0) {
            return res.status(400).json({ success: false, message: "Invalid email or password." });
        }

        const foundUser = user;
        
        // Compare passwords
        const isPasswordValid = await compare(password, foundUser.password);
        
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: "Invalid email or password." });
        }

        // Generate tokens
        const accessToken = generateAccessToken(foundUser.user_id);
        const refreshToken = generateRefreshToken(foundUser.user_id);

        // Store refresh token in HTTP-only cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.status(200).json({
            success: true,
            message: "Login successful!",
            accessToken,
        });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ success: false, message: "Server error." });
    }
};

//Refresh token function
export const refreshAccessToken = (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(403).json({ success: false, message: "No refresh token provided." });
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        const newAccessToken = generateAccessToken(decoded.userId);

        res.status(200).json({ success: true, accessToken: newAccessToken });
    } catch (error) {
        res.status(403).json({ success: false, message: "Invalid refresh token." });
    }
};

 
export const getUsersCon = async (req, res) => {
    try {
        console.log("GET /user API called");  // Debugging line
        const users = await getUsers();
        console.log("Fetched users:", users); // Debugging line
        res.json(users);
    } catch (error) {
        console.error('Error in getUsersCon:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteUserCon = async (req, res) => {
    try {
        const userId = req.params.id;

        if (!userId || isNaN(userId)) {
            return res.status(400).json({ error: 'Invalid user ID' });
        }

        const result = await deleteUser(userId);

        if (result.message) {
            return res.status(200).json({ message: result.message });
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error in deleteUserCon:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateUserCon = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;

        if (!userId || Object.keys(userData).length === 0) {
            return res.status(400).json({ error: "Invalid user ID or empty update data" });
        }

        const result = await updateUser(userId, userData);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ message: "User updated successfully", affectedRows: result.affectedRows });
    } catch (error) {
        console.error("Error in updateUserCon:", error);
        res.status(500).json({ error: "Internal Server Error in controller" });
    }
};

export const getProtectedData = async (req, res) => {
    try {
        const userId = req.userId; // Retrieved from the authenticated token

        // Fetch data specific to the authenticated user
        const data = await fetchDataForUser(userId);

        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Error fetching protected data:', error);
        res.status(500).json({ success: false, message: 'An error occurred while fetching data.' });
    }
};