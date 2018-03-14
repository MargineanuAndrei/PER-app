exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', (table) => {
    table.increments();
    table.string('title').unique().notNullable();
    table.string('description').notNullable();
    table.integer('rating');
    table.timestamp('released').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
