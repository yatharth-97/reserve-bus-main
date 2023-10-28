const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const tripRouter = require('./routes/trips.route.js');
const bookingsRouter = require('./routes/bookings.route.js');

// middleware
app.use(express.json());

// routes
app.use('/api', tripRouter);
// app.use('/api', bookingsRouter);

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
