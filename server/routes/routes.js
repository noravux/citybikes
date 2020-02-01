const express = require('express');
const router = express.Router();
const { getBikes } = require('../controllers/bikedata');

router.route('/').get(getBikes);

module.exports = router;
