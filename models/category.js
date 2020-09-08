const mongoose = require("mongoose");

const { Schema } = mongoose;

const CategorySchema = new Schema({
  category_name: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
