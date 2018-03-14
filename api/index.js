const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const movieRoute = require('./routes/movies.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/movies', movieRoute);

app.listen(3000, () => console.log('Api is listening on port 3000'));
