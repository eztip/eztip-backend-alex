const tipDb = require('../../db/tip.js');
//const validators = require('../../validators/user/create.js');

module.exports = {
  type: 'POST',
  url: '/',
  handler: (req, res) => {
    const { amount, fromId, fromUsername, toId, toUsername } = req.body;
    const newTip = {
      amount,
      fromId,
      fromUsername,
      toId,
      toUsername,
    };
    //const newKeys = Object.keys(newTip);
    //const validations = newKeys.map(key => validators[key](newTip));
    //Promise.all(validations).then(() => {
      tipDb.insert(newTip)
        .then((id) => {
          res.status(201).json(id);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: 'Error saving new tip to database.' });
        });
    //}).catch(err => res.status(err.statusCode || 500).json(err.stack));
  },
};
