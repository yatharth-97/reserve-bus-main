const express = require('express');
const router = express.Router();
const Trip = require('../models/trips.model.js');
const Ticket = require('../models/tickets.model.js');

// To get Trip details
router.get('/trips', async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get trips' });
  }
});

// To post Trip details in database
router.post('/trips', async (req, res) => {
  try {
    const {
      date,
      from,
      to,
      busOwnerID,
      startTime,
      EndTime,
      category,
      SeatBooked,
      bus_no,
      amenities_list,
      busFare,
      busName,
    } = req.body;

    // took the details from the body and added to the database
    const trip = new Trip({
      date: new Date(date), // the "date" field will be stored as a proper date object in the database
      from,
      to,
      busOwnerID,
      startTime: new Date(startTime),
      EndTime: new Date(EndTime),
      category,
      SeatBooked,
      bus_no,
      amenities_list,
      busFare,
      busName,
    });

    await trip.save();
    res.status(201).json({ message: 'Trip adding successful' });
  } catch (error) {
    res.status(500).json({ message: 'Trip adding failed' });
  }
});

// To post request to save the ticket details
router.post('/book-ticket', async (req, res) => {
  try {
    const { name, date, from, to, seatNumber, category, busName, busFare } =
      req.body;

    // took the details from the body and added to the database
    const ticket = new Ticket({
      name,
      date: new Date(date), // the "date" field will be stored as a proper date object in the database
      from,
      to,
      seatNumber,
      category,
      busName,
      busFare,
    });

    await ticket.save();
    res.status(201).json({ message: 'Ticket saved' });
  } catch (error) {
    res.status(500).json({ message: 'Ticket saving failed' });
  }
});

// to get details based on the date
router.get('/date', async (req, res) => {
  const { date } = req.query;
  // localhost:3000/api/date?date=2023-10-28  will take dates in this form in url
  if (!date) {
    return res.status(400).json({ message: 'Date parameter is required' });
  }

  try {
    const trips = await Trip.find({ date: new Date(date) });
    res.status(200).json(trips);
  } catch (error) {
    console.error('Failed to find any trip on this Date', error);
    res.status(500).json({ message: 'Failed to fetch' });
  }
});

// to get ticket info by adding from, to and category of the trip
router.get('/ticket-info', async (req, res) => {
  try {
    // example: localhost:3000/api/ticket-info?from=Delhi&to=Agra&category=A/C Sleeper (2+1)&startTime=2023-01-17
    const { from, to, category, startTime } = req.query;
    let encodedCategory = encodeURIComponent(category); // will now be "A%2FC%20Sleeper%20%282%2B1%29"
    const filter = {}; // we will add this object in find

    if (from) {
      filter.from = from;
    }
    if (to) {
      filter.to = to;
    }
    if (category) {
      filter.category = encodedCategory;
      // filter.category = category;
    }
    if (startTime) {
      filter.startTime = new Date(startTime);
    }

    const trips = await Trip.find(filter);
    res.status(200).json({ message: ' Ticket Info done', trips: trips });
  } catch (error) {
    res.status(500).json({ message: 'Failed to get details' });
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//*-------------------INITIAL ROUTE IDEAS -------------------------------------------/
/*
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
 *  need to provide the date as a parameter
 */
/*
router.get('/tripsByDate/:date', async (req, res) => {
  try {
    const { date } = req.params;

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
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = router;
