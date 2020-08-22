const router = require("express").Router();
const forumController = require("../../controllers/forumControllers");

// Matches with "/api/forums"
router.route("/")
  .get(forumController.findAll)
  .post(forumController.create);

// Matches with "/api/forums/:id"

module.exports = router;
