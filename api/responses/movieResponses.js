const httpStatus = require('http-status-codes');

// Custum functions for service responses
const MOVIE_ERROR = () => ({ code: httpStatus.BAD_REQUEST, message: 'Bad request.' });
const INVALID_ID = () => ({ code: httpStatus.BAD_REQUEST, message: 'Invalid id.' });
const INVALID_MOVIE = () => ({ code: httpStatus.BAD_REQUEST, message: 'Invalid movie data.' });
const ALREADY_EXIST = () => ({ code: httpStatus.BAD_REQUEST, message: 'Movie with such title already exist.' });

const MOVIE_SUCCESS = () => ({ code: httpStatus.OK, message: 'Success request.' });
const MOVIE_DELLETED = () => ({ code: httpStatus.OK, message: 'Movie deleted succeseful.' });
const MOVIE_CREATED = () => ({ code: httpStatus.OK, message: 'Movie created succeseful.' });
const MOVIE_UPDATED = () => ({ code: httpStatus.OK, message: 'Movie updated succeseful.' });

module.exports = {
  MOVIE_ERROR,
  MOVIE_SUCCESS,
  INVALID_ID,
  MOVIE_DELLETED,
  MOVIE_CREATED,
  INVALID_MOVIE,
  ALREADY_EXIST,
  MOVIE_UPDATED,
};
