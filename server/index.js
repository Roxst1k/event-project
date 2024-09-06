import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import {router as eventRoutes} from "./src/routes/event-routes.js";

const PORT = process.env.PORT || 5000;
const URL = 'mongodb+srv://roxst1k:roxst1k@cluster0.wp3mn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// const corsOptions = {
//     origin: 'http://localhost:3000', // Дозволяє доступ тільки з цього домену
//     optionsSuccessStatus: 200
// };


const app = express();

// app.use(cors(corsOptions));

app.use(express.json());
// app.use(eventRoutes)

app.get('/', (req, res) => {
    res.status(200).send('success');
})

mongoose.connect(URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`Not connect to MongoDB`, err));


app.listen(PORT,(err) => {
    err ? console.log(err) : console.log('Server running on port', PORT);
});




