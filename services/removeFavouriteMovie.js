const express = require('express');
const router = express.Router();
const Movie = require('../api/models/movieSchema');

router.delete("/removeFavorite", (req, res) => {
        try {
          const { movieId } = req.so;
          favoriteMovies = favoriteMovies.filter((movie) => movie.so !== movieId);
          res.status(200).json({ message: "Movie removed from favorite list" });
        } catch (error) {
          console.error(error);
          // res.status(500).json({ error: "Internal Server Error" });
        }
    });

module.exports = router;
