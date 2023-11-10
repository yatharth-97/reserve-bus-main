const express = require('express');
const router = express.Router();
const Ticket = require('../models/tickets.model.js');

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

module.exports = router;
