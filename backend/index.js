import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import productsRouter from './routes/productsRoutes.js';
import authRoutes from './routes/userRoutes.js';
import forgotRouters from './routes/forgotRouter.js';
import cartRouter from './routes/cartRouter.js';
import userRoutes from './routes/userRoutes.js';
import gameRoutes from './routes/gameRoutes.js';
import {API_URL} from './config/config.js'

// import checkoutRouter from './routes/checkoutRouter.js';
 
config(); // Load environment variables
const app = express(); 

// Enable CORS before defining the routes
app.use(cors({
    origin: API_URL,  //  Allow your frontend origin
    credentials: true,                //  Allow cookies & authorization headers
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
})); 

// Middleware for JSON parsing
app.use(express.json());

// Highscore route after CORS middleware
app.use('/highscore', gameRoutes);

// Routes for other endpoints
app.use('/products', productsRouter); //laptops, monitors, PCtower, accessories
app.use("/api/authentication", forgotRouters); // forgot password Route
app.use('/cart', cartRouter); // cart
app.use('/api/auth', authRoutes); // signup
app.use('/users', userRoutes);


// Root Route (Optional) 
app.get('/', (req, res) => {
    res.send('Welcome to Tech Store API!');
}); 

 
// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start Server
const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
