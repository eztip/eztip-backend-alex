const tipDb = require('../../db/tip.js');

module.exports = {
  type: 'GET',
  url: '/tips',
  handler: (req, res) => {
    tipDb.get()
      .then((tips) => {
        res.status(200).json({ tips/*, token: req.decodedToken*/ });
      })
      .catch((err) => {
        res.status(500).json({ error: 'Could not retrieve tips.' });
      });
  },
  //protected: true,
};
