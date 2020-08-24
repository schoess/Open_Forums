const Forum = require('../models/forum');

module.exports = {
    create: (req, res) => {
        const forum = new Forum(req.body);
        Forum.create(forum).then((createdForum) => {
            res.json(createdForum);
        }).catch((err) => {
            res.json(err);
        });
    },
    findAll: (req,res) => {
        Forum.find(req.query)
        .then(dbForums => res.json(dbForums))
        .catch(err => res.status(422).json(err));
  
    },
    findById: (req,res) => {
        Forum.findById(req.params.forumId)
        .then(dbForum => res.json(dbForum))
        .catch(err => res.status(422).json(err));
    },
    deleteById: (req,res) => {
        Forum.findByIdAndDelete(req.params.forumId)
        .then(dbForum => res.json(dbForum))
        .catch(err => res.status(422).json(err));
  
    } 
    
};