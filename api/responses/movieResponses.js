const httpStatus = require('http-status-codes');

const MOVIE_ERROR = () => ({ code: httpStatus.BAD_REQUEST, message: 'Bad request.' });
const INVALID_ID = () => ({ code: httpStatus.BAD_REQUEST, message: 'Invalid id.' });

const MOVIE_SUCCESS = () => ({ code: httpStatus.OK, message: 'Success request.' });
const MOVIE_DELLETED = () => ({ code: httpStatus.OK, message: 'Movie deleted succeseful.' });

module.exports = {
  MOVIE_ERROR,
  MOVIE_SUCCESS,
  INVALID_ID,
  MOVIE_DELLETED
};
