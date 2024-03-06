import express from 'ecpress';
import db from './db/connection.js.';
import routes from './routes/index.js';
import cors from 'cors';
import logger from 'morgan';

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(cors());
app.use(logger());

app.use('/api', routes);

db.on("Connected", () => {
    console.clear();
    console,log("Connected to MongoDB")
});

app.listen(PORT, () => {
    console.log(`Express server is running on ${PORT}`)
});