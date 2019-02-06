const db = require('../dbConfig.js');

module.exports = {
  getForLogin: function(username) {
    let query = db('users');
    return query
      .where('username', username)
      .first();
  },
  insert: function(user) {
    return db('users')
      .insert(user)
      .then(([id]) => id );
  },
  get: function() {
    return db('users').select('id', 'username');
  },
  getWorkers: function(id) {
    if(id === undefined){
      let query = db('users').select(
        'id',
        'username',
        'profile_photo',
        'working_since',
        'tagline',
        'first_name',
        'last_name',
        'type_id',
        'user_type',
      );
      return query
        .where('user_type','employee')
    } else {
      let query = db('users').select(
        'id',
        'username',
        'profile_photo',
        'working_since',
        'tagline',
        'first_name',
        'last_name',
        'type_id',
        'user_type',
      );
      return query
        .where('id', id)
        .where('user_type','employee')
        .first()
    }
  },
  update: function(id, changes) {
    return db('users')
      .where('id', id)
      .update(changes)
  },
};
