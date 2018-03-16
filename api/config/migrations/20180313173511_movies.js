// Migration for movie table
exports.up = knex => knex.schema.createTable('movies', (table) => {
  table.increments();
  table.string('title').unique().notNullable();
  table.string('description').notNullable();
  table.integer('rating').notNullable();
  table.timestamp('released').defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('movies');
