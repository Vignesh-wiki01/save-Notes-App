// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

// Set up Express server
const app = express();
app.use(express.json());
app.use(cors());

// Set up MongoDB connection
const mongoURI = 'mongodb+srv://savenote:save123@cluster0.curnqd3.mongodb.net/?retryWrites=true&w=majority';
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  })
  .catch((error) => {
    console.log('Failed to connect to MongoDB:', error);
  });

// Define your API routes here
// Example: app.get('/api/notes', (req, res) => { ... });

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
