const express = require('express');
const router = express.Router();
const { getBikes } = require('../controllers/bikedata');
const { getDailyRentals } = require('../controllers/dailyrentals');

router.route('/').get(getBikes);
router.route('/bikes').get(getDailyRentals);

module.exports = router;
