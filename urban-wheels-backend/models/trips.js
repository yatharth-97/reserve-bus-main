const mongoose = require('mongoose');

const tripsSchema = new mongoose.Schema({
  date: Number,
  from: String,
  to: String,
  busOwnerID: Number,
  startTime: Number,
  endTime: Number,
  category: String,
  seatBooked: [String],
  bus_no: String,
  amenities_list: [String],
  busFare: Number,
  busName: String,
});

module.exports = mongoose.model('Trip', tripsSchema);
