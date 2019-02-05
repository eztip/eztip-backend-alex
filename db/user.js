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
};
