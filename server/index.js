import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
   res.send('Hello from AI');
})

const startServer = async () => {

    try {
         connectDB(process.env.MONGO_URL);
         app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
 
         console.log('MongoDB connected...');

    } catch (error) {
        console.log(error);
    }

 
}
startServer();