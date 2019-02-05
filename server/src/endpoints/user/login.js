const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userDb = require('../../db/user.js');

function generateToken(user) {
  const payload = {
    username: user.username,
  };

  const secret = 'some random dev secret key';

  const options = {
    expiresIn: '10m',
  };

  return jwt.sign(payload, secret, options);
}

module.exports = {
  type: 'POST',
  url: '/login/',
  handler: (req, res) => {
    const user = req.body;
    // if add validators, promise.all goes here
    userDb.getLogin(user.username)
      .then((returnedUser) => {
        if (returnedUser && bcrypt.compareSync(user.password, returnedUser.password)) {
          const token = generateToken(user);
          res.status(201).json({ message: `welcome ${user.username}`, token });
        } else {
          res.status(400).json({ error: 'Not authenticated.' });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: 'Error verifying user in database.' });
      });
  },
};
