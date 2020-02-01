const express = require('express');
const router = express.Router();
const { getBikes, getSingleBike, getTemperature, getDates, getAllRentals } = require('../controllers/bikedata');

router.route('/').get(getBikes);
router.route('/bike').get(getSingleBike);
router.route('/temperature').get(getTemperature);
router.route('/dates').get(getDates);
router.route('/rentals').get(getAllRentals);

module.exports = router;
