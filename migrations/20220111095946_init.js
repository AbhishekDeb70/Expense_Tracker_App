
exports.up = function(knex) {
  return knex.schema.createTable('expense',table =>{
    table.increments('id');
    table.string('text').notNullable();
    table.integer('amount').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('expense');
};
