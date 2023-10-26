const mongoose = require('mongoose');

const tripsSchema = new mongoose.Schema({
  // date: Number,
  date: {
    type: Date,
    required: true,
  },
  // from: String,
  from: {
    type: String,
    required: true,
  },
  // to: String,
  to: {
    type: String,
    required: true,
  },
  // busOwnerID: Number,
  busOwnerID: {
    type: Number,
    required: true,
  },
  // startTime: Number,
  startTime: {
    type: Date,
    required: true,
  },
  // endTime: Number,
  endTime: {
    type: Date,
    required: true,
  },
  // category: String,
  category: {
    type: String,
    required: true,
  },
  // seatBooked: [String],
  seatBooked: {
    type: [String],
    required: true,
  },
  bus_no: String,
  amenities_list: [String],
  // busFare: Number,
  busFare: {
    type: Number,
    required: true,
  },
  // busName: String,
  busName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Trip', tripsSchema);
