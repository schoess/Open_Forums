const router = require("express").Router();
const ForumController = require("../../controllers/forum.controller");
const ReplyController = require("../../controllers/reply.controller");

router.route("/").post(ForumController.create).get(ForumController.findAll);

router
  .route("/:forumId")
  .get(ForumController.findById)
  .delete(ForumController.deleteById)
  .put(ForumController.updateById);

router
  .route("/:forumId/replies")
  .post(ReplyController.create)
  .get(ReplyController.getReplies);
<<<<<<< HEAD
router.route("/:forumId/replies/:replyId/like").put();
router.route("/:forumId/replies/:replyId/dislike").put();
=======
>>>>>>> 929a94e84ab7e129c9a78522ecef9303f1e32331

module.exports = router;
