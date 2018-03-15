const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

const movieRoute = require('./routes/movies.js');

// Default midlleware to allow client side calls to api
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Default midlleware for body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Movies routes
app.use('/movies', movieRoute);

app.listen(5000, () => console.log('Api is listening on port 5000'));
