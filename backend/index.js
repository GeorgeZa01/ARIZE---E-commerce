import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import productsRouter from './routes/productsRoutes.js';
import userRouter from './routes/userRoutes.js';
import authRoutes from './routes/forgotRouter.js'; 
import authRouters from './routes/authRouter.js';
import cartRouter from './routes/cartRouter.js'
import signuploginRoute from './routes/authRouter.js';


config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());

app.use(express.json());

// Routes
app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use("/api/auth", authRoutes); //forgotpassword Route
app.use('/api/auth', authRoutes); //Signup & Login
app.use('/cart', cartRouter);
app.use('/api/auth', signuploginRoute); //Signup & Login

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
