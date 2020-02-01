const mongoose = require('mongoose');

const dailyrentals = new mongoose.Schema({
  /*Date: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
  Rental_time: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
BRAHENPUISTO: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
CANTHIA: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
HERMANNINAUKIO: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
KAUPPAKATU: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
KEILANKANTA: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
KOLMISOPPI: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
KUOPIOHALLI: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
KYS: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
MATKAKESKUS: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
MICROTEKNIA: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
MÄNNISTÖ: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
NEULAMÄKI: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
NIIRALANKATU: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
PUIJONLAAKSO: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
RAUHALAHTI: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
SAANA: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
SAARIJÄRVI: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
SATAMA: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
'SAVILAHTI - LUOLA': {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
SAVISAARI: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
SNELLMANIA: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  },
SÄRKILAHTI: {
    type: Number,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [25, 'Name must be less than 25 characters']
  }*/
  
});

module.exports = mongoose.model('rentals', dailyrentals);
