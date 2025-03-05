import{getHighscore,addNewHighscore}from '../model/gameModel.js'

const getHighscoreCon = async (req, res) => {
    try {
        const highscore = await getHighscore();
        res.status(200).json(highscore);
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};
const addNewHighscoreCon = async (req, res) => {
    try {
        const { user_id, highscore } = req.body;
        const newHighscore = await addNewHighscore(user_id, highscore);
        res.status(200).json(newHighscore);
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
};

export { getHighscoreCon, addNewHighscoreCon };