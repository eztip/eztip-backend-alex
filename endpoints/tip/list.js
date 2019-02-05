const tipDb = require('../../db/tip.js');

module.exports = {
  type: 'GET',
  url: 's/',
  handler: (req, res) => {
    tipDb.get()
      .then((users) => {
        res.status(200).json({ users/*, token: req.decodedToken*/ });
      })
      .catch((err) => {
        res.status(500).json({ error: 'Could not retrieve tips.' });
      });
  },
  //protected: true,
};
