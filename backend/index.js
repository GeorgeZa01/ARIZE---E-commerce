import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import productsRouter from './routes/productsRoutes.js';
import authRoutes from './routes/userRoutes.js';
import forgotRouters from './routes/forgotRouter.js';
import cartRouter from './routes/cartRouter.js';
import userRoutes from './routes/userRoutes.js';
import gameRoutes from './routes/gameRoutes.js';
import { API_URL, Frontend_URL } from './config/config.js';

config(); // Load environment variables
const app = express();

// Enhanced CORS configuration
const allowedOrigins = [
    'https://arize-e-commerce.vercel.app',
    'https://vercel.com/georgeza01s-projects/arize-e-commerce/6A61i9B9HBCY56qjh56pXvyr7rDm',
    'http://localhost:3030' // For local development
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            console.log('Blocked by CORS:', origin);
            return callback(new Error('Not allowed by CORS'), false);
        }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    exposedHeaders: ["Authorization"]
}));

// Middleware for JSON parsing
app.use(express.json());

// Logging middleware for debugging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    console.log('Origin:', req.headers.origin);
    next();
});

// Route handlers
app.use('/highscore', gameRoutes);
app.use('/products', productsRouter); // laptops, monitors, PCtower, accessories
app.use("/api/authentication", forgotRouters); // forgot password Route
app.use('/cart', cartRouter); // cart
app.use('/api/auth', authRoutes); // signup
app.use('/users', userRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'healthy',
        frontend: Frontend_URL,
        api: API_URL
    });
});

// Root Route
app.get('/', (req, res) => {
    res.send('Welcome to Arize Tech Store API!');
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    
    if (err.message === 'Not allowed by CORS') {
        return res.status(403).json({ 
            error: 'CORS Error',
            message: `Origin '${req.headers.origin}' not allowed`,
            allowedOrigins: allowedOrigins
        });
    }
    
    res.status(500).json({ 
        error: 'Internal Server Error',
        message: err.message || 'Something went wrong!'
    });
});

// Start Server
const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`Server running at ${API_URL || `http://localhost:${port}`}`);
    console.log(`Allowed Frontend: ${Frontend_URL}`);
    console.log(`Allowed Origins: ${allowedOrigins.join(', ')}`);
});