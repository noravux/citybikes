const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Body parser
app.use(express.json());

app.use(cors());

// Routes
app.use('/api/data', require('./routes/routes'));

app.get('/testi', (req, res) => {
  let datefrom = req.query.datefrom;
  let dateto = req.query.dateto;
  res.send('haetaan väliltä' + datefrom + ' - ' + dateto);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
