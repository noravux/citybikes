const express = require('express');
const router = express.Router();
const { getBikes, getSingleBike } = require('../controllers/bikedata');

router.route('/').get(getBikes);
router.route('/bike').get(getSingleBike);

module.exports = router;
