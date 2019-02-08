const userDb = require('../../db/user.js');
const tipDb = require('../../db/tip.js');
const validators = require('../../validators/user/create.js');

module.exports = {
  type: 'PUT',
  url: '/workers/:id',
  handler: (req, res) => {
    const {id} = req.params;
    let modififedUser = { 
      username,
      password,
      email,
      type,
      profile_photo,
      working_since,
      first_name,
      last_name,
      tagline,
      occupation,
    } = req.body;
    console.log(id);
    console.log(modififedUser);
    const changedKeys = Object.keys(modififedUser);
    const validations = changedKeys.map(key => validators[key](modififedUser));
    Promise.all(validations).then(() => {
      userDb.update(id, modififedUser)
      .then(response => {
        if(response === undefined){
          res.status(404).json({message: "Worker not found."});
        }else{
          tipDb.getTipsToUser(id)
            .then((tips) => {
              if(tips === undefined) {
                tips = [];
              }
              modififedUser.tips = tips;
              res.status(200).json({ modififedUser });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json({ error: 'Could not retrieve tips.' });
            });
        }
      })
      .catch(err => {
        res.status(500).json({ error: "The worker could not be retrieved." });
      });
    }).catch(err => res.status(err.statusCode || 500).json(err.message));
  },
  protected: true
}