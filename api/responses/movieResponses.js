const httpStatus = require('http-status-codes');

const MOVIE_ERROR = () => ({ code: httpStatus.BAD_REQUEST, message: 'Bad request.' });

const MOVIE_SUCCESS = () => ({ code: httpStatus.OK, message: 'Success request.' });

module.exports = {
  MOVIE_ERROR,
  MOVIE_SUCCESS
};
