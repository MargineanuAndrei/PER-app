const R = require('ramda');

const MovieService = require('../services/movieService');
const MovieResponses = require('../responses/movieResponses');

const { errorResponse, okResponse } = require('../utils/response');

class MovieController {
  // Controler for get all movies route (get '/')
  static async getAllMovies(req, res) {
    return (await MovieService.getAllMovies()).cata(
      () => errorResponse(res, MovieResponses.MOVIE_ERROR()),
      result => okResponse(res, result, MovieResponses.MOVIE_SUCCESS()),
    );
  }

  // Controler for get one movie route (get '/:id')
  static async getOneMovie(req, res) {
    return (await MovieService.getOneMovie(req.params.id)).cata(
      error => errorResponse(res, R.cond([
        [
          R.equals(MovieService.ERRORS.INVALID_ID),
          R.always(MovieResponses.INVALID_ID()),
        ],
        [
          R.T,
          R.always(MovieResponses.MOVIE_ERROR()),
        ],
      ])(error)),
      result => okResponse(res, result, MovieResponses.MOVIE_SUCCESS()),
    );
  }

  // Controler for delete movie route (delete '/:id')
  static async removeMovie(req, res) {
    return (await MovieService.removeMovie(req.params.id)).cata(
      error => errorResponse(res, R.cond([
        [
          R.equals(MovieService.ERRORS.INVALID_ID),
          R.always(MovieResponses.INVALID_ID()),
        ],
        [
          R.T,
          R.always(MovieResponses.MOVIE_ERROR()),
        ],
      ])(error)),
      () => okResponse(res, undefined, MovieResponses.MOVIE_DELLETED()),
    );
  }

  // Controler for create movie route (post '/')
  static async createMovie(req, res) {
    return (await MovieService.createMovie(req.body)).cata(
      error => errorResponse(res, R.cond([
        [
          R.equals(MovieService.ERRORS.INVALID_MOVIE),
          R.always(MovieResponses.INVALID_MOVIE()),
        ],
        [
          R.equals(MovieService.ERRORS.ALREADY_EXIST),
          R.always(MovieResponses.ALREADY_EXIST()),
        ],
        [
          R.T,
          R.always(MovieResponses.MOVIE_ERROR()),
        ],
      ])(error)),
      () => okResponse(res, undefined, MovieResponses.MOVIE_CREATED()),
    );
  }

  // Controller for update movie route (put '/:id')
  static async updateMovie(req, res) {
    return (await MovieService.updateMovie(req.params.id, req.body)).cata(
      error => errorResponse(res, R.cond([
        [
          R.equals(MovieService.ERRORS.INVALID_ID),
          R.always(MovieResponses.INVALID_ID()),
        ],
        [
          R.equals(MovieService.ERRORS.ALREADY_EXIST),
          R.always(MovieResponses.ALREADY_EXIST()),
        ],
        [
          R.equals(MovieService.ERRORS.INVALID_MOVIE),
          R.always(MovieResponses.INVALID_MOVIE()),
        ],
        [
          R.T,
          R.always(MovieResponses.MOVIE_ERROR()),
        ],
      ])(error)),
      () => okResponse(res, undefined, MovieResponses.MOVIE_UPDATED()),
    );
  }
}

module.exports = MovieController;
