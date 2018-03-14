const express = require('express');
const router = express.Router();

const MovieController = require('../controllers/movieController');

router.get('/', MovieController.getAllMovies);

module.exports = router;
