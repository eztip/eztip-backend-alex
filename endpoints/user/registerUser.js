const bcrypt = require('bcryptjs');
const userDb = require('../../db/user.js');
const validators = require('../../validators/user/create.js');

module.exports = {
  type: 'POST',
  url: '/register',
  handler: (req, res) => {
    const newUser = { 
      username,
      password,
      email,
      user_type,
      profile_photo,
      working_since,
      first_name,
      last_name,
      tagline,
      type_id,
    } = req.body;
    newUser.user_type = "guest";
    const newKeys = Object.keys(newUser);
    const validations = newKeys.map(key => validators[key](newUser));
    Promise.all(validations).then(() => {
      const hash = bcrypt.hashSync(newUser.password, 14);
      newUser.password = hash;
      userDb.insert(newUser)
        .then((id) => {
          res.status(201).json(id);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: 'Error saving new user to database.' });
        });
    }).catch(err => res.status(err.statusCode || 500).json(err.stack));
  },
};

/*
{
  "username": "test2",
  "password": "password",
  "email": "test2@test2.com",
  "first_name": "john",
  "last_name": "smith",
  "user_type": "guest",
  "tagline": "howdy"
}
 */