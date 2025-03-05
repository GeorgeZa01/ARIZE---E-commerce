import express from 'express';
import {getHighscoreCon, addNewHighscoreCon} from '../controller/gameCon.js';

const router = express.Router();

router.get('/', getHighscoreCon); // Fetch high scores
router.post('/', addNewHighscoreCon); // Add new high score


export default router;