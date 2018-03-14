
// Knex configurations
module.exports = {
  development: {
    client: 'postgresql',
    debug: true,
    connection: {
      host:     'localhost',
      database: 'movies',
      user:     'postgres',
      password: 'postgres'
    }
  }
};
