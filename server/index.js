import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

import dotenv from 'dotenv';


const app = express();
dotenv.config();

//limit upload image file size using bodyparser and json and convert it into a url
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//use the routes imported from ../routes
app.use('/posts', postRoutes);
app.use('/user', userRoutes);


//Server PORT variable
const PORT = process.env.PORT || 5000;

//DATABASE Connection + listen on server
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT} http://localhost:${PORT} `)))
  .catch((error) => console.log(error.message));

// https://www.mongodb.com/cloud/atlas
