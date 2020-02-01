const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Body parser
app.use(express.json());

// Routes
app.use('/api/data', require('./routes/routes'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
