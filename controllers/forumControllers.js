const db = require("../models");
// Defining methods for the forumControllers

module.exports =  {
    create: function(req, res) {
    db.Forum
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    }

}