const mongoose = require("mongoose");
const db = require("../models/Forum");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Forum",{ useNewUrlParser: true });

const forumSeed = [
  {
    forum_title: "How to make Cereal",
    forum_description:
      "Get milk, get a bowl, get a spoon and choose your favorite cereal. Pour the milk into the box, put the bowl on your head and throw the spoon at your little brother while screaming.",
    category: "Food",
    date: new Date(Date.now()),
  },
  {
    forum_title: "How to make Cereal",
    forum_description:
      "Get milk, get a bowl, get a spoon and choose your favorite cereal. Pour the milk into the box, put the bowl on your head and throw the spoon at your little brother while screaming.",
    category: "Food",
    date: new Date(Date.now()),
  }
];


db.collection.insertMany(forumSeed);



