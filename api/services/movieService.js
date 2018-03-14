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
}


module.exports = MovieService;
