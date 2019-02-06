const ValidationError = require('../validationError');

module.exports = {
  worker_id: ({ worker_id }) => {
    if (typeof worker_id !== 'number' || worker_id < 0) {
      throw new ValidationError('Invalid worker_id.');
    }
    return true;
  },
  tip_date: ({ tip_date }) => {
    return true;
  },
  tip_amount: ({ tip_amount }) => {
    if (typeof tip_amount !== 'number' || tip_amount < 0) {
      throw new ValidationError('Invalid tip_amount.');
    }
    return true;
  },
  fromId: ({ fromId }) => {
    return true;
  },
  toId: ({ toId }) => {
    return true;
  },
};
