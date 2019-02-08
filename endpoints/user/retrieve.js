const userDb = require('../../db/user.js');
const tipDb = require('../../db/tip.js');
//const validators = require('../../validators/action/update.js');

module.exports = {
  type: 'GET',
  url: '/workers/:id',
  handler: (req, res) => {
    userDb.getWorkers(req.params.id)
      .then(user => {
        if(user != undefined){
          console.log(req.params.id);
          tipDb.getTipsToUser(req.params.id)
            .then((tips) => {
              if(tips === undefined) {
                tips = [];
              }
              user.tips = tips;
              res.status(200).json({ user });
            })
            .catch((err) => {
              res.status(500).json({ error: 'Could not retrieve tips.' });
            });
        }else{
          res.status(404).json({ error: "Worker not found."});
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Could not retrieve worker." });
      })
  },
  protected: true,
}