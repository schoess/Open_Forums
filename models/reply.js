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
});

const ReplyToForum = mongoose.model("ReplyToForum", ReplyForumSchema);

module.exports = ReplyToForum;
