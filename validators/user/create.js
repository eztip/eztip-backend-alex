const ValidationError = require('../validationError');

module.exports = {
  username: ({ username }) => {
    if (username === '' || typeof username !== 'string' || username.length > 128) {
      throw new ValidationError('Invalid username.');
    }
    return true;
  },
  password: ({ password }) => {
    if (password === '' || typeof password !== 'string' || password.length > 128) {
      throw new ValidationError('Invalid password.');
    }
    return true;
  },
  email: ({ email }) => {
    return true;
  },
  user_type: ({ user_type }) => {
    if (user_type === '' || typeof user_type !== 'string' || (user_type !== "guest" && user_type !== "employee") ) {
      throw new ValidationError('Invalid user_type.');
    }
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
  type_id: ({ type_id }) => {
    return true;
  },
};
