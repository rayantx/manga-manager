import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import mangasRoute from './routes/mangasRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

/* app.use(
  cors ({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type"],
  })
); */

app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('teste');
});

app.use('/mangas', mangasRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });