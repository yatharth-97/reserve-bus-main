const express = require('express');
const router = express.Router();
const Booking = require('../models/bookings');

router.post('/saveBooking', async (req, res) => {
  try {
    const { userID, tripID, seatsBooked, totalPrice } = req.body;

    const newBooking = new Booking({
      userID,
      tripID,
      seatsBooked,
      totalPrice,
      bookingDate: new Date(),
    });

    await newBooking.save();

    res.status(201).json({ message: 'Booking saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving the booking' });
  }
});

module.exports = router;
