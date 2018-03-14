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
}

MovieService.ERRORS = {
  INVALID_ID: 'INVALID_ID'
};


module.exports = MovieService;
