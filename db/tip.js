const db = require('../dbConfig.js');

module.exports = {
  getTipsToUser: function(username) {
    let query = db('tips');
    return query
      .where('toUsername', username)
  },
  insert: function(tip) {
    return db('tips')
      .insert(tip)
      .then(([id]) => id );
  },
  getTipsFromUser: function(username) {
    let query = db('tips');
    return query
      .where('fromUsername', username)
  },
  get: function() {
    let query = db('tips');
    return query
  },
};
