const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const forumSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    category: {
      type: String,
      default: "",
      unique: true
    },
    date: { 
        type: Date, 
        default: Date.now 
    }

  });
  
  const Forum = mongoose.model("Recipe", forumSchema);
  
  module.exports = Forum;
  