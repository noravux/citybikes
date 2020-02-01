const dailyrentals = require('../models/dailyrentalsmodel');

exports.getDailyRentals = async (req, res, next) => {
  try {
    const data = await dailyrentals.find();
    return res.status(200).json({
      success: true,
      count: data.length,
      data: data
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Error at server'
    });
  }
};