import express from 'express';
import database from './db/Database.js';
import taskRoutes from "./routes/taskRoutes.js"; 
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const app = express();


app.use(cors());
database();

app.use(express.json());

app.use('/api', taskRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
