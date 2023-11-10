const mongoose = require('mongoose');

const ticketsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
  },
  date: Date,
  from: String,
  to: String,
  seatNumber: Number,
  category: String,
  busName: String,
  busFare: Number,
});

module.exports = mongoose.model('Ticket', ticketsSchema);
