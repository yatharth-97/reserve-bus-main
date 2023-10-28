const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const tripRouter = require('./routes/trips.route.js');

// middleware
app.use(express.json());

// routes
app.use('/api', tripRouter);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
