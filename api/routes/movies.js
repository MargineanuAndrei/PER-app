const express = require('express');
const router = express.Router();

const MovieController = require('../controllers/movieController');

router.get('/', MovieController.getAllMovies);
router.get('/:id', MovieController.getOneMovie);
router.delete('/:id', MovieController.removeMovie);
// router.post('/', MovieController.createMovies);

module.exports = router;
