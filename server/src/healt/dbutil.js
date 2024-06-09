// databaseUtils.js
const mongoose = require('mongoose');

async function isConnectedToDatabase() {
  try {
    const connection = await mongoose.connection.db;
    return connection.readyState === 1; // Check connection state (1: connected)
  } catch (error) {
    console.error("Error connecting to database:", error);
    return false;
  }
}

module.exports = isConnectedToDatabase;
