import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import productsRouter from './routes/productsRoutes.js';
import userRouter from './routes/userRoutes.js';
import forgotRouters from './routes/forgotRouter.js';
import cartRouter from './routes/cartRouter.js'


config(); // Load environment variables

const app = express();

// Middleware
app.use(cors({
    origin: "*", // Allow all origins (for development)
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));


app.use(express.json());

// Routes
app.use('/products', productsRouter); //laptops,monitors,PCtower,accessories
app.use('/users', userRouter); //login & register
app.use("/api/authentication", forgotRouters); //forgotpassword Route
app.use('/cart', cartRouter); //cart

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
