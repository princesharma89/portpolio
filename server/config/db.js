const mongoose = require('mongoose');

let isConnected = false;
let isInMemoryFallback = false;

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/prince_portfolio';
  
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 2500 // fast timeout to fall back cleanly if local DB daemon is off
    });
    isConnected = true;
    isInMemoryFallback = false;
    console.log(`[Database] MongoDB Connected to: ${mongoose.connection.host}`);
  } catch (error) {
    console.warn(`[Database Warning] Could not connect to MongoDB at ${mongoURI}.`);
    console.warn(`[Database Warning] ${error.message}`);
    console.log(`[Database] Activating In-Memory / JSON Fallback Mode for seamless offline operation.`);
    isConnected = false;
    isInMemoryFallback = true;
  }
};

const getDBStatus = () => {
  return {
    connected: isConnected,
    mode: isInMemoryFallback ? 'in-memory-fallback' : (isConnected ? 'mongodb' : 'disconnected'),
    databaseName: isConnected ? mongoose.connection.name : 'in-memory'
  };
};

module.exports = { connectDB, getDBStatus };
