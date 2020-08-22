const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ForumSchema = new Schema({
  forum_name: String,
  createdAt: Date,
});

module.exports = mongoose.model("Forum", ForumSchema);
