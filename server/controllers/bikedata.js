const Bike = require('../models/Bike');

exports.getBikes = async (req, res, next) => {
  try {
    const data = await Bike.find();
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

exports.getSingleBike = async (req, res, next) => {
  try {
    const data = await Bike.findOne();
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

exports.getSingleBike = async (req, res, next) => {
  try {
    const data = await Bike.find({}, 'Date Rental');
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

exports.getTemperature = async (req, res, next) => {
  try {
    const data = await Bike.find({}, 'Temperature');
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

exports.getDates = async (req, res, next) => {
  try {
    const data = await Bike.find({}, 'Date');
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
