const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');
require('dotenv').config();
const db = require('./healt/dbutil');
const Data = require('./models/Data');

const app = express();

app.use(cors());
app.use(express.json());

const MONGO = "mongodb://127.0.0.1:27017/Assign"; // Updated to use IPv4

// MongoDB connection
mongoose.connect(MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.error("Error connecting to MongoDB", err);
  });

// Routes
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/getusers", async (req, res) => {
  try {
    const users = await Data.find({}); // Fetch one document
    console.log(users); // Log the retrieved document
    res.json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ message: error.message });
  }
});