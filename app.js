
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const connectDB = require('./db'); 
connectDB(); 

const moviesRoutes = require('./api/routes/movies');
const searchMoviesRoutes = require('./api/routes/searchMovies');
const moviesFilter = require('./api/routes/moviesFilter');
const userRoutes = require('./api/routes/user');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors({
    origin: 'http://localhost:3001', 
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'cache-control'], // Add 'cache-control' to the allowed headers
    credentials: true,
    methods: 'GET, POST, PUT, DELETE, OPTIONS', 
  }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
       return res.status(200).json({});
    } else {
      next();
    }
  });

app.use('/movies', moviesRoutes)
app.use('/searchMovies', searchMoviesRoutes)
app.use('/moviesFilter', moviesFilter)
app.use('/user', userRoutes)


// app.use((req, res, next) => {
//     const error = new Error("Not Found")
//     error.status(404);
//     next(error)
// })

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
      error: {
          message: err.message
      }
  });
});

app.use((req, res, next) => {
    res.status(200).json({
        message: "Its work"
    })
})

module.exports = app;