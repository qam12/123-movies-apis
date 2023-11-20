const mongoose = require('mongoose');

const connectDB = () => {
  const mongoDBUrl = 'mongodb://localhost:27017/movies_db';

  // Connect to MongoDB
  mongoose.connect(mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB successfully');
  });
};

module.exports = connectDB;
