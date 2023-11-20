const express = require('express');
const router = express.Router();
const Movie = require('../api/models/movieSchema');

router.get("/getFavorites", (req, res) => {
        try {
          res.status(200).json(favoriteMovies);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
        }
    });

module.exports = router;
