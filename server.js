import express from 'express';
import db from './db/connection.js';
import routes from './routes/index.js';
import cors from 'cors';
import logger from 'morgan';

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(logger());

app.use('/', routes);

db.on("connected", () => {
    console.clear();
    console.log("Connected to MongoDB")
    app.listen(PORT, () => {
        console.log(`Express server is running on ${PORT}`)
    });
});
