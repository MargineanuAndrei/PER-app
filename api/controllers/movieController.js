const MovieService = require('../services/movieService');
const MovieResponses = require('../responses/movieResponses');

const { errorResponse, okResponse } = require('../utils/response');

class MovieController {
  static async getAllMovies(req, res) {
    return (await MovieService.getAllMovies()).cata(
      error => errorResponse(res, MovieResponses.MOVIE_ERROR()),
      result => okResponse(res, result, MovieResponses.MOVIE_SUCCESS()),
    );
  }
}

module.exports = MovieController;
