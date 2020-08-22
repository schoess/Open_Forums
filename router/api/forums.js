const router = require("express").Router();
const forumController = require("../../controllers/forumControllers");

// Matches with "/api/forums"
router.route("/")
  .post(forumController.create);

// Matches with "/api/books/:id"

module.exports = router;
