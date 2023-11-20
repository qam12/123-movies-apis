const express = require('express');
const router = express.Router();

const Movie = require('../models/movies');

router.get('/', async (req, res, next) => {
  try {
    const year = req.query.y;
    const quality = req.query.q;
    const genre = req.query.g;

    const filter = {};

    if (year) {
      filter.y = parseInt(year);
    }

    if (quality) {
      filter.q = quality;
    }

    if (genre) {
      filter.g = genre;
    }

    const movies = await Movie.find(filter).exec();

    if (movies.length === 0) {
      return res.status(404).json({
        message: 'No movies matching the filter criteria found',
      });
    }

    res.status(200).json({
      message: 'Movies matching the filter criteria retrieved successfully',
      movies: movies,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
