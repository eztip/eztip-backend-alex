
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(users) {
    users.increments();
    users.string('username', 128).notNullable();
    users.string('password', 128).notNullable();
    users.string('email', 128);
    users.string('user_type', 128).notNullable();
    users.string('profile_photo', 128);
    users.string('working_since');
    users.string('first_name', 128).notNullable();
    users.string('last_name', 128).notNullable();
    users.string('tagline', 128);
    users.int('type_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
