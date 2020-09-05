const mongoose = require("mongoose");

const { Schema } = mongoose;

const ForumSchema = new Schema({
  forum_title: {
    type: String,
    required: true,
  },
  forum_description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  replies: [
    {
      type: Schema.Types.ObjectId,
      ref: "ReplyToForum",
    },
  ],
  user: {
    id: { type: String },
    name: { type: String },
    picture: { type: String },
  }
  
});

const Forum = mongoose.model("Forum", ForumSchema);

module.exports = Forum;
