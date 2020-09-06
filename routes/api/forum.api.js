const router = require("express").Router();
const ForumController = require("../../controllers/forum.controller");
const ReplyController = require("../../controllers/reply.controller");

router.route("/")
.post(ForumController.create)
.get(ForumController.findAll);

router.route("/:forumId")
  .get(ForumController.findById)
  .delete(ForumController.deleteById)
  .put(ForumController.updateById);

router.route("/:forumId/replies")
.post(ReplyController.create)
.get(ReplyController.getReplies);

module.exports = router;
