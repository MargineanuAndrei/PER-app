const { Either } = require('monet');

const knex = require('../db/knex');

class MovieService {

  static async getAllMovies() {
    try {
      const movies = await knex('movies').select();

      return Either.Right(movies);
    } catch (error) {
      return Either.Left();
    }
  }

  static async getOneMovie(id) {
    try {
      const movie = await knex('movies')
        .select()
        .where('id', id);

      if(movie.length == 0){
        return Either.Left(MovieService.ERRORS.INVALID_ID);
      }

      return Either.Right(movie);
    } catch (error) {
      return Either.Left();
    }
  }

  static async removeMovie(id) {
    try {
      const movie = await knex('movies')
        .select()
        .where('id', id);

      if(movie.length == 0){
        return Either.Left(MovieService.ERRORS.INVALID_ID);
      }

      await knex('movies')
        .del()
        .where('id', id);

      return Either.Right();
    } catch (error) {
      return Either.Left();
    }
  }

  static async createMovie(data) {
    try {
      const validationErr = await MovieService.validateMovie(data);
      if (validationErr.isRight()) {
        await knex('movies').insert(data)
        return Either.Right();
      }
      return Either.Left(validationErr.value);
    } catch (error) {
      return Either.Left();
    }
  }

  static async validateMovie(data) {
    try {
      return Either.Right();
    } catch (error) {
      return Either.Left(MovieService.ERRORS.INVALID_MOVIE);
    }
  }
}

MovieService.ERRORS = {
  INVALID_ID: 'INVALID_ID',
  INVALID_MOVIE: 'INVALID_MOVIE'
};


module.exports = MovieService;
