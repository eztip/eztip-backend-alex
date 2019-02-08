const db = require('../dbConfig.js');

module.exports = {
  getTipsToUser: function(id) {
    let query = db('tips');
    return query
      .where('toId', id)
  },
  insert: function(tip) {
    return db('tips')
      .insert(tip)
      .then(([id]) => id );
  },
  getTipsFromUser: function(id) {
    let query = db('tips');
    return query
      .where('fromId', id)
  },
  get: function(id) {
    if(id === undefined){
      let query = db('tips');
      return query
    }else{
      let query = db('tips')
        .where('id', id)
        .first()
        return query
    }
  },
};
