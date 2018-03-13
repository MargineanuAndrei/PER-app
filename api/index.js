const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes/movies.js');

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/movies', routes);

app.listen(3000, () => console.log('Api is listening on port 3000'));
