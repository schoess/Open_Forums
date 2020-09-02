const mongoose = require("mongoose");

const { Schema } = mongoose;

const ForumSchema = new Schema({
  forum_title: { type: String },
  forum_description: { type: String },
  category: { type: String },
  date: { type: Date, default: Date.now },
  user: {
    id: { type: String },
    name: { type: String },
    picture: { type: String },
  },
});

const Forum = mongoose.model("Forum", ForumSchema);

module.exports = Forum;
