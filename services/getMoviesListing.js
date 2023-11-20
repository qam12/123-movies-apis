const express = require('express');
const router = express.Router();
const Movie = require('../api/models/movieSchema');

router.get('/getMoviesListing', (req, res) => {
    res.send('Test movies listing route');
  });
// GET /movies
// router.get('/getMoviesListing', async (req, res) => {
//     console.log(req, res, "data find")
//   try {
//     const movies = await Movie.find();
//     console.log(movies, "movies")
//     res.json(movies);
//   } catch (error) {
//     console.log(error, "error messages")
//     res.status(500).json({ message: 'Error retrieving movies' });
//   }
// });

module.exports = router;
