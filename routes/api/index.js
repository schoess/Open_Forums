const router = require("express").Router();
const forumApi = require("./forum.api");

router.use("/forums", forumApi);

module.exports = router;
