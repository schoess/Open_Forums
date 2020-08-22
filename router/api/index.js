const router = require("express").Router();
const forumRoutes = require("./forums");

// Forum routes
router.use("/forums", forumRoutes);

module.exports = router;
