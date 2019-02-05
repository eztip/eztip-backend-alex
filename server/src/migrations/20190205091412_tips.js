
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tips', function(tips) {
    tips.increments();
    tips.decimal('amount').notNullable();
    tips.int('fromId').notNullable();
    tips.string('fromUsername', 128).notNullable();
    tips.int('toId', 128).notNullable();
    tips.string('toUsername', 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tips');
};
