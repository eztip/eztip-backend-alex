const bcrypt = require('bcryptjs');
const userDb = require('../../db/user.js');
const validators = require('../../validators/worker/create.js');

module.exports = {
  type: 'POST',
  url: '/workers',
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
    newUser.password = "employee";
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
          res.status(500).json({ error: 'Error saving new worker to database.' });
        });
    }).catch(err => res.status(err.statusCode || 500).json(err.stack));
  },
};

/*
    users.string('username', 128).notNullable();
    users.string('password', 128).notNullable();
    users.string('email', 128);
    users.string('type', 128).notNullable();
    users.string('profile_photo', 128);
    users.string('working_since');
    users.string('first_name', 128).notNullable();
    users.string('last_name', 128).notNullable();
    users.string('tagline', 128);

 */