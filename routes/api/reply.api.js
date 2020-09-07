const router = require("express").Router();
const ReplyController = require("../../controllers/reply.controller");

router.route("/:replyId")
   .delete(ReplyController.deleteByReplyId)
   .put(ReplyController.updateByReplyId);
   
module.exports = router;
