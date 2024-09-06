import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import {router as eventRoutes} from "./src/routes/event-routes.js";

const PORT = process.env.PORT || 5000;
const URL = 'mongodb+srv://roxst1k:roxst1k@cluster0.wp3mn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const corsOptions = {
    origin: 'http://event-project-delta.vercel.app/', // Дозволяє доступ тільки з цього домену
    optionsSuccessStatus: 200
};


const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.use(eventRoutes)

mongoose.connect(URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`Not connect to MongoDB`, err));


app.listen(PORT,(err) => {
    err ? console.log(err) : console.log('Server running on port', PORT);
});


// const app = express();
// const port = process.env.PORT || 3000;  // використовує PORT з оточення Vercel
//
// app.use(express.json());
//
// // ваші маршрути, наприклад:
// app.get('/api', (req, res) => {
//     res.json({ message: 'API is working!' });
// });
//
// // запускаємо сервер
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

