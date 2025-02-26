import {deleteUser, updateUser, createUser, getusers} from '../model/userModel.js';

export const getuserscon = async (req, res) => {
    try {
        const users = await getusers();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}
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

