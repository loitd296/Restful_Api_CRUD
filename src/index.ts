import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

dotenv.config();

const app = express();

//middlware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());

//Database

//Routes
app.get('/', (req, res) => {
  res.json({ msg: 'Hello' });
});

//Start sever
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
