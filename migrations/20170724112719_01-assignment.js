
exports.up = function(knex, Promise) {
  return knex.schema.createTable('homework', (table) => {
    table.increments();
    table.date('due_date').notNullable();
    table.string('name').notNullable();
    table.text('description');
    table.string('subject');
    table.integer('priority');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.drobTableIfExists('homework');
};
