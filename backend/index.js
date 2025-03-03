import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import productsRouter from './routes/productsRoutes.js';
import authRoutes from './routes/userRoutes.js';
import forgotRouters from './routes/forgotRouter.js';
// import cartRouter from './routes/cartRouter.js'
import userRoutes from './routes/userRoutes.js';
// import checkoutRouter from './routes/checkoutRouter.js';


config(); // Load environment variables
 
const app = express();

// Middleware
app.use(cors({
    origin: 'http://127.0.0.1:5500',  // Frontend URL
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],  // Allow PATCH method
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allow necessary headers
}));


app.use(express.json());

// Routes
app.use('/products', productsRouter); //laptops,monitors,PCtower,accessories
app.use("/api/auth", authRoutes); //login & register
app.use("/api/authentication", forgotRouters); //forgotpassword Route
// app.use('/cart', cartRouter); //cart
app.use('/signup', authRoutes);
app.use('/users', userRoutes);
// app.use('/payment', checkoutRouter)//payment gateway
// app.use('/checkout', checkoutRouter)//checkout



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

