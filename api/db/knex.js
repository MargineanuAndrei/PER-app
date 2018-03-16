
// Configuration for db connection
const env = 'development';
const config = require('../config/knexfile.js');

const knex = require('knex')(config[env]);

module.exports = knex;
