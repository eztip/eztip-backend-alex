const ValidationError = require('../validationError');

module.exports = {
  username: ({ username }) => {
    if (username === '' || typeof username !== 'string' || username.length > 128) {
      throw new ValidationError('Invalid username.');
    }
    return true;
  },
  password: ({ password }) => {
    if (password === '' || typeof password !== 'string' || password.length > 128 || password.length < 6) {
      throw new ValidationError('Invalid password.');
    }
    return true;
  },
  email: ({ email }) => {
    if (email === '' || typeof email !== 'string' || email.length > 128) {
      throw new ValidationError('Invalid email.');
    }
    return true;
  },
  type: ({ type }) => {
    return true;
  },
  first_name: ({ first_name }) => {
    return true;
  },
  last_name: ({ last_name }) => {
    return true;
  },
  tagline: ({ tagline }) => {
    return true;
  },
  profile_photo: ({ profile_photo }) => {
    return true;
  },
  working_since: ({ working_since }) => {
    return true;
  },
};
