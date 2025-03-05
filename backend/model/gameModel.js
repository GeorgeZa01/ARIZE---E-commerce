import { pool } from '../config/config.js';

const getHighscore = async () => {
    const [highscore] = await pool.query(
        'SELECT user_id, highscore FROM game ORDER BY highscore DESC LIMIT 1'
    );
    return highscore;
};

const addNewHighscore = async (user_id, highscore) => {
    if (!user_id) {
        throw new Error('user_id cannot be null or undefined');
    }
    if (typeof highscore !== 'number') {
        throw new Error('Highscore must be a number');
    }

    try {
        await pool.query('INSERT INTO game (user_id, highscore) VALUES (?, ?)', [
            user_id,
            highscore,
        ]);
        return { user_id, highscore }; // return inserted data
    } catch (error) {
        console.error('Error inserting highscore:', error);
        throw new Error('Failed to insert highscore');
    }
};




export { getHighscore, addNewHighscore };
