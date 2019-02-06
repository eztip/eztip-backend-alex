const tipDb = require('../../db/tip.js');
//const validators = require('../../validators/action/update.js');

module.exports = {
  type: 'GET',
  url: '/tips/:id',
  handler: (req, res) => {
    tipDb.get(req.params.id)
      .then(tip => {
        if(tip != undefined){
          res.status(200).json(tip);
        }else{
          res.status(404).json({ error: "Tip not found."});
        }
      })
      .catch(err => {
        console.log(err);
      res.status(500).json({ error: "Could not retrieve tip." });
      })
  }
}