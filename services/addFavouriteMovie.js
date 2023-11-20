const express = require('express');
const router = express.Router();
const Movie = require('../api/models/movieSchema');

router.post("/addFavorite", (req, res) => {
        console.log(req, "request")
      try {
        const { movie } = req;
        favoriteMovies.push(movie);
        res.status(200).json({ message: "Movie added to favorite list" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

module.exports = router;
