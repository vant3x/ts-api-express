import "dotenv/config";
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import dbConnect from './config/db';
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

dbConnect().then(() => console.log('DB is running'))
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})