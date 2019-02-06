const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userDb = require('../../db/user.js');
require('dotenv').config({path: __dirname + '/../../.env'});

function generateToken(user) {
  const payload = {
    username: user.username,
  };
  const { JSW_SECRET: secret } = process.env;
  const options = {
    expiresIn: '10m',
  };
  return jwt.sign(payload, secret, options);
}

module.exports = {
  type: 'POST',
  url: '/login',
  handler: (req, res) => {
    const user = req.body;
    // if add validators, promise.all goes here
    userDb.getForLogin(user.username)
      .then((returnedUser) => {
        if (returnedUser && bcrypt.compareSync(user.password, returnedUser.password)) {
          const token = generateToken(user);
          res.status(201).json({ 
            user_type: returnedUser.user_type, 
            username: returnedUser.username,
            id: returnedUser.id, 
            token 
          });
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

/*

{
  "username": "test2",
  "password": "password"
}

 */