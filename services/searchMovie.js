const express = require('express');
const router = express.Router();
const Movie = require('../api/models/movieSchema');

router.get("/searchMovie", (req, res) => {
        try {
          const query = req.query.q;
            console.log(query, "query")
          if (!query) {
            return res.status(400).json({ error: "Missing query parameter 'q'" });
          }
      
          const filteredMovies = apiData?.filter(movie =>
            movie.t.toLowerCase().includes(query.toLowerCase())
          );
      
          res.send(filteredMovies);
        } catch (error) {
          console.error(error.log(error));
          res.status(500).json({ error: "Internal server error" });
        }
    });

module.exports = router;
