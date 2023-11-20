const express = require('express');
const router = express.Router();

const Movies = require('../models/movies');
const checkAuth = require('../middleware/check-auth');

router.post('/', checkAuth, (req, res, next) => {
  Movies.find()
    .exec()
    .then((movies) => {
      if (movies.length === 0) {
        return res.status(404).json({
          message: 'No movies found in the database',
        });
      }
      res.status(200).json({
        message: 'Movies retrieved successfully',
        movies: movies,
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message,
      });
    });
});

module.exports = router;
