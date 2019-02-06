
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tips', function(tips) {
    tips.increments();
    tips.decimal('tip_amount').notNullable();
    tips.int('fromId');
    tips.int('toId', 128);
    tips.int('worker_id', 128).notNullable();
    tips.date('tip_date');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tips');
};
