const ValidationError = require('../validationError');

module.exports = {
  username: ({ username }) => {
    return true;
  },
  password: ({ password }) => {
    return true;
  },
  email: ({ email }) => {
    return true;
  },
  user_type: ({ user_type }) => {
    return true;
  },
  first_name: ({ first_name }) => {
    if (first_name === '' || typeof first_name !== 'string' || first_name.length > 128) {
      throw new ValidationError('Invalid first_name.');
    }
    return true;
  },
  last_name: ({ last_name }) => {
    if (last_name === '' || typeof last_name !== 'string' || last_name.length > 128) {
      throw new ValidationError('Invalid last_name.');
    }
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
