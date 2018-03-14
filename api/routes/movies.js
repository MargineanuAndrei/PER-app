const express = require('express');
const router = express.Router();

const MovieController = require('../controllers/movieController');

// All movie routes
router.get('/', MovieController.getAllMovies);
router.get('/:id', MovieController.getOneMovie);
router.delete('/:id', MovieController.removeMovie);
router.post('/', MovieController.createMovie);
router.put('/:id', MovieController.updateMovie);

module.exports = router;
