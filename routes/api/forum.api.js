const router = require("express").Router();
const ForumController = require("../../controllers/forum.controller");

router.route("/").post(ForumController.create).get(ForumController.findAll);

router
  .route("/:forumId")
  .get(ForumController.findById)
  .delete(ForumController.deleteById);

module.exports = router;
