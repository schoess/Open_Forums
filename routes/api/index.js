const router = require("express").Router();
const forumApi = require("./forum.api");
const replyApi = require("./reply.api");

router.use("/forums", forumApi);
router.use("/replies", replyApi);

module.exports = router;
