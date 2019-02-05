const userDb = require('../../db/user.js');

module.exports = {
  type: 'GET',
  url: 's/',
  handler: (req, res) => {
    userDb.get()
      .then((users) => {
        res.status(200).json({ users, token: req.decodedToken });
      })
      .catch((err) => {
        res.status(500).json({ error: 'Could not retrieve users.' });
      });
  },
  protected: true,
};
