const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/dbConfig');
const usersRoute = require('./routes/usersRoute');

app.use(express.json());

// routes
app.use('/api/users', usersRoute);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
