const mongoose = require('mongoose');

function dbConnection() {
  const dbURL = process.env.Mongo_Url;
  
  mongoose.connect(dbURL)
    .then(() => console.log("✅ Connected successfully to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
}

module.exports = dbConnection;
