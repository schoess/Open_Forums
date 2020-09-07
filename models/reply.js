const mongoose = require("mongoose");

const { Schema } = mongoose;

const ReplyForumSchema = new Schema({
  reply_description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  forum: {
    type: Schema.Types.ObjectId,
    ref: "Forum",
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  likedUsers: [String],
  dislikedUsers: [String],
});

const ReplyToForum = mongoose.model("ReplyToForum", ReplyForumSchema);

module.exports = ReplyToForum;
