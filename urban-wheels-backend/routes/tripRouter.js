const express = require('express');
const router = express.Router();
const Trip = require('../models/trips');

router.post('/addTrip', async (req, res) => {
  try {
    const newTripData = req.body;
    const newTrip = new Trip(newTripData);

    await newTrip.save();

    res.status(201).json({ message: 'Trip added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding the trip' });
  }
});

router.get('/pastTrips', async (req, res) => {
  try {
    const pastTrips = await Trip.find({})
      .sort({ date: -1 }) // sort  date in descending order -> most recent first
      .limit(50); // limit to 50

    res.json(pastTrips);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving past trips' });
  }
});

/**
 * When you make a GET request to /api/tripsByDate, you
 *  need to provide the date as a query parameter
 */
router.get('/tripsByDate', async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ error: 'Date parameter is required' });
    }

    const tripsByDate = await Trip.find({ date: parseInt(date) });

    res.json(tripsByDate);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving trip details by date' });
  }
});

// get Trip details with query params
router.get('/trips', async (req, res) => {
  try {
    const {
      from,
      to,
      date,
      arrival,
      departure,
      startRating,
      endRating,
      operators,
    } = req.query;

    // Create  query object to build the filter
    const query = {};

    if (from) query.from = from;
    if (to) query.to = to;
    if (date) query.date = parseInt(date);
    if (arrival) query.arrival = arrival;
    if (departure) query.departure = departure;

    // must handle startRating and endRating as a range
    if (startRating && endRating) {
      query.rating = { $gte: parseInt(startRating), $lte: parseInt(endRating) };
    } else if (startRating) {
      query.rating = { $gte: parseInt(startRating) };
    } else if (endRating) {
      query.rating = { $lte: parseInt(endRating) };
    }

    if (operators) query.operator = operators;

    const trips = await Trip.find(query);

    res.json(trips);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving trip details' });
  }
});

module.exports = router;
