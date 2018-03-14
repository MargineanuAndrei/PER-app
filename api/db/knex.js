const config = require('../config/knexfile.js');
const env = 'development';
const knex = require('knex')(config[env]);

module.exports = knex;
