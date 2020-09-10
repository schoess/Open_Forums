/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Add routes, both API and view
app.use(routes);

// connect to mongodb
// mongoose
//   .connect(process.env.MONGODB_URI || "mongodb://localhost/openforums", {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
//   })
//   .then(() => console.log("Connected"))
//   .catch((err) => console.log(err));

// // below allows the findByIdAndDelete mongoose call to be used
// mongoose.set("useFindAndModify", false);

const connection =
  "mongodb+srv://forumGuy:x44ChTJmQysK3kwQ@cluster0.rmtku.mongodb.net/Open_Forums?retryWrites=true&w=majority";
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));

// mongoose.set("useFindAndModify", false);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
