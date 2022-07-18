import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes';

dotenv.config();

const app = express();

//middlware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());

//Database
mongoose.connect(
  process.env.MONGO_URL,
  {
    autoIndex: false,
  },
  (err) => {
    if (err) throw err;
    console.log('Mongodb connection');
  }
);
//Routes
app.use('/api', routes);

//Start sever
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
