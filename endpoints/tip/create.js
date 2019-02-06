const tipDb = require('../../db/tip.js');
const validators = require('../../validators/tip/create.js');

module.exports = {
  type: 'POST',
  url: '/tips',
  handler: (req, res) => {
    const newTip = {
      tip_amount,
      fromId,
      toId,
      worker_id,
      tip_date
    } = req.body;
    const newKeys = Object.keys(newTip);
    const validations = newKeys.map(key => validators[key](newTip));
    Promise.all(validations).then(() => {
      tipDb.insert(newTip)
        .then((id) => {
          res.status(201).json(id);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: 'Error saving new tip to database.' });
        });
    }).catch(err => res.status(err.statusCode || 500).json(err.stack));
  },
};

/*

{
  "worker_id": 1,
  "tip_amount": 4.21
}

 */