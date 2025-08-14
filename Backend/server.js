import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRoutes from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';
import subscriptionRoute from "./routes/subscriptionRoute.js";

const app = express();

// Connect to MongoDB database
await connectDB();

// Middlewares
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON bodies in requests

// Basic test route to check if API is working
app.get('/', (req,res)=> res.send("API is Working"));

// Use admin routes under /api/admin path
app.use('/api/admin',adminRoutes);

// Use blog routes under /api/blog path
app.use('/api/blog',blogRouter);

app.use("/api/subscribe", subscriptionRoute);

// Start the server on specified port
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})

export default app; // Export the app
