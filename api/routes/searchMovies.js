const express = require('express');
const router = express.Router();

const Movie = require('../models/movies');

router.get('/', async (req, res, next) => {
  try {
    const searchTerm = req.query.query;

    if (!searchTerm) {
      // Handle cases where no search term is provided
      return res.status(400).json({
        message: 'Please provide a valid search term.',
      });
    }

    const movies = await Movie.find({
      t: { $regex: new RegExp(searchTerm, 'i') },
    }).exec();

    if (movies.length === 0) {
      return res.status(404).json({
        message: 'No movies matching the search term found',
      });
    }

    res.status(200).json({
      message: 'Movies matching the search term retrieved successfully',
      movies: movies,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
