const Forum = require("../models/forum");
// const { db } = require("../models/forum");

module.exports = {
  create: (req, res) => {
    const forum = new Forum(req.body);
    Forum.create(forum)
      .then((createdForum) => {
        res.json(createdForum);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  findAll: (req, res) => {
    Forum.find(req.query)
      .then((dbForums) => res.json(dbForums.reverse()))
      .catch((err) => res.status(422).json(err));
  },
  findById: (req, res) => {
    Forum.findById(req.params.forumId)
      .then((dbForum) => res.json(dbForum))
      .catch((err) => res.status(422).json(err));
  },
  deleteById: (req, res) => {
    Forum.findByIdAndDelete(req.params.forumId)
      .then((dbForum) => res.json(dbForum))
      .catch((err) => res.status(422).json(err));
  },
  updateById: (req, res) => {
    Forum.findById(req.params.forumId).then((dbForumOne) => {
      if (
        dbForumOne.likedUsers.includes(req.params.forumId) ||
        dbForumOne.dislikedUsers.includes(req.params.forumId)
      ) {
        return;
      }

      // Forum.findByIdAndUpdate({ $and: [{ _id: req.params.forumId }, { votingUsers: { "$ne": req.params.forumId } }] }, req.body)
      Forum.findByIdAndUpdate(req.params.forumId, req.body)
        .then((dbForum) => res.json(dbForum))
        .catch((err) => res.status(422).json(err));
    });
  },
};
