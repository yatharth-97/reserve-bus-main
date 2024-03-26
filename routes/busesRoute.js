const router = require('express').Router();
const Bus = require('../models/busModel');

// add bus
router.post('/add-bus', async (req, res) => {
  const { number } = req.body;
  try {
    const existingBus = await Bus.findOne({ number: number });
    if (existingBus) {
      return res
        .status(200)
        .send({ success: false, message: 'Bus already exists' });
    }

    const newBus = new Bus(req.body);
    await newBus.save();

    return res
      .status(200)
      .send({ success: true, message: 'Bus added successfully' });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

module.exports = router;
