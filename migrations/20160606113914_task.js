
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', function(table){
      table.increments();
      table.text('todo');
      table.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos');
};
