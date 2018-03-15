const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

const movieRoute = require('./routes/movies.js');

// Default midlleware to allow client side calls to api
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', "*");

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Default midlleware for body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Movies routes
app.use('/movies', movieRoute);

app.listen(5000, () => console.log('Api is listening on port 5000'));
