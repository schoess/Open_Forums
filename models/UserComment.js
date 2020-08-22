const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserComment = new Schema({
    comment: String,
    createdAt: Date,
    forumId: {
        type: Schema.Types.ObjectId,
        ref:"Forum"
    }
})

module.exports = mongoose.model("UserComment", UserComment);