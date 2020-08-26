const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserComment = new Schema({
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
  forumId: {
    type: Schema.Types.ObjectId,
    ref: "Forum",
  },
});

module.exports = mongoose.model("UserComment", UserComment);
