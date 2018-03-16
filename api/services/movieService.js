const { Either } = require('monet');
const Joi = require('joi');

const knex = require('../db/knex');

class MovieService {
  // Get all movie
  static async getAllMovies() {
    try {
      // Query to get all movies from db
      const movies = await knex('movies').select();

      return Either.Right(movies);
    } catch (error) {
      return Either.Left();
    }
  }

  // Get movie by id function
  static async getOneMovie(id) {
    try {
      // Query to check if movie exists in db
      const movie = await knex('movies')
        .select()
        .where('id', id);

      // Check result of query
      if (movie.length === 0) {
        return Either.Left(MovieService.ERRORS.INVALID_ID);
      }

      return Either.Right(movie);
    } catch (error) {
      return Either.Left();
    }
  }

  // Remove movie function
  static async removeMovie(id) {
    try {
      // Query to check if movie exists in db
      const movie = await knex('movies')
        .select()
        .where('id', id);

      // Check result of query
      if (movie.length === 0) {
        return Either.Left(MovieService.ERRORS.INVALID_ID);
      }

      // Delete movie query
      await knex('movies')
        .del()
        .where('id', id);

      return Either.Right();
    } catch (error) {
      return Either.Left();
    }
  }

  // Create movie function
  static async createMovie(data) {
    try {
      // Validate data from body
      const validationErr = await MovieService.validateMovie(data);

      // Handle response from validation
      if (validationErr.isRight()) {
        // Check if movie with such title already exists
        // Query to count all movies with this title in db
        const movies = await knex('movies')
          .count()
          .where('title', data.title)
          .then(result => parseInt(result[0].count, 10));

        // Verify if movie with such title already exist
        if (movies) {
          return Either.Left(MovieService.ERRORS.ALREADY_EXIST);
        }

        // Insert new movie in db
        await knex('movies')
          .insert(data);

        return Either.Right();
      }
      return Either.Left(validationErr.value);
    } catch (error) {
      return Either.Left();
    }
  }

  // Update movie function
  static async updateMovie(id, data) {
    try {
      // Query to count movies with this id in db
      const movie = await knex('movies')
        .count()
        .where('id', id)
        .then(result => parseInt(result[0].count, 10));

      // Return error if movie not exists
      if (movie === 0) {
        return Either.Left(MovieService.ERRORS.INVALID_ID);
      }

      // Validate data from body
      const validationErr = await MovieService.validateMovie(data);

      // Handle response from validation
      if (validationErr.isRight()) {
        // Get all movies from data base
        const allMovies = await knex('movies').select();
        let titleAlreadyExists = false;

        // Check if movie with such title already exists
        allMovies.forEach((mov) => {
          if (parseInt(id, 10) !== mov.id && data.title === mov.title) {
            titleAlreadyExists = true;
          }
        });

        // Verify if movie with such title already exists
        if (titleAlreadyExists) {
          return Either.Left(MovieService.ERRORS.ALREADY_EXIST);
        }

        // Update movie in db
        await knex('movies')
          .update(data)
          .where('id', id);

        return Either.Right();
      }
      return Either.Left(validationErr.value);
    } catch (error) {
      return Either.Left();
    }
  }

  // Validation function for creating a new movie
  static async validateMovie(data) {
    try {
      // Validation rules for data to create a movie
      const movieSchema = Joi.object({
        title: Joi.string().min(2).max(50).required(),
        description: Joi.string().min(2).max(300).required(),
        rating: Joi.number().integer().positive().max(10).required(),
      });

      // Valitate entry data
      const validation = Joi.validate(data, movieSchema, {
        allowUnknown: false,
        abortEarly: false,
      });

      // Check for errors
      if (validation.error) {
        return Either.Left(MovieService.ERRORS.INVALID_MOVIE);
      }
      return Either.Right();
    } catch (error) {
      return Either.Left(MovieService.ERRORS.INVALID_MOVIE);
    }
  }
}

MovieService.ERRORS = {
  ALREADY_EXIST: 'ALREADY_EXIST',
  INVALID_ID: 'INVALID_ID',
  INVALID_MOVIE: 'INVALID_MOVIE',
};


module.exports = MovieService;
