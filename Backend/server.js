import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRoutes from './routes/adminRoutes.js';


const app = express();

await connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req,res)=> res.send("API is Working"));
app.use('/api/admin',adminRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})

export default app;