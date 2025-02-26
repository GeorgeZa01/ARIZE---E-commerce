import {getUsers, deleteUser, updateUser} from '../model/userModel.js';

    try {
        if (await findUserByEmail(email)) {
            return res.status(400).json({ message: "Email already registered!" });
        }

        await createUser(fullName, email, password);
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    };

    
const deleteUserCon = async (req, res) => {
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

const updateUserCon = async (req, res) => {
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
export { getUserCon, deleteUserCon, updateUserCon };
