const mongoose = require("mongoose");

const { Schema } = mongoose;

const ForumSchema = new Schema({
  forum_title: { type: String, required: true },
  forum_description: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Forum = mongoose.model("Forum", ForumSchema);

module.exports = Forum;
