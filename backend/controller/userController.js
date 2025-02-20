import {getUsers} from '../model/userModel.js';

const getUserCon = async (req, res) => {
    try {
        const users = await getUsers(); // Call model function
        res.json(users);
    } catch (error) {
        console.error('Error in getUserCon:', error);
        res.status(500).json({ error: 'Internal Server Error in controller' });
    }
};

export { getUserCon };