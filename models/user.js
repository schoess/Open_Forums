const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    index: {
      unique: true,
    },
  },
  email: {
    type: String,
    required: true,
    index: { unique: true },
  },
  password: {
    type: String,
    required: true,
    default: "",
  },
});

module.exports = mongoose.model("User", UserSchema);