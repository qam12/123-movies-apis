const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  so: {
    type: Number,
    required: true
  },
  t: {
    type: String,
    required: true
  },
  g: {
    type: String,
    required: true
  },
  y: {
    type: Number,
    required: true
  },
  q: {
    type: String,
    required: true
  },
  c: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('movies', movieSchema);;
 