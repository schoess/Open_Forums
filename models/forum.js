const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ForumSchema = new Schema({
  forum_title: String,
  forum_description: String,
  category: String,
  createdAt: Date,

});

module.exports = mongoose.model("Forum", ForumSchema);
