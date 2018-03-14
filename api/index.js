const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const movieRoute = require('./routes/movies.js');

// Default midlleware for body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Movies routes
app.use('/movies', movieRoute);

app.listen(3000, () => console.log('Api is listening on port 3000'));
