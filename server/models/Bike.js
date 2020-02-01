const mongoose = require('mongoose');

const BikeSchema = new mongoose.Schema({
  Date: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
  Cloud: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
  Temperature: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
  WindSpeed: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
  Rental: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
  Precipitation: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  }
});

module.exports = mongoose.model('Bike', BikeSchema);
