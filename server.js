const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const ErrorHandling = require("./src/middlewares/ErrorHandling");
const router = require("./src/router");
const app = express();

dotenv.config();
app.set("views", __dirname + "/src/views");
app.set("view-engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
app.use(router);
app.use(ErrorHandling);

(async () => {
  let mongo_connection = false;
  try {
    mongo_connection = await mongoose.connect(
      "mongodb://" +
        process.env.DB_HOST +
        ":" +
        process.env.DB_PORT +
        "/" +
        process.env.DB_NAME,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected MongoDb");
  } catch (err) {
    console.log("Mongoose Connection Error:", err);
  } finally {
    /* Listen Project */
    app.listen(
      process.env.APP_PORT || 8080,
      process.env.APP_HOST || "localhost",
      (err) => {
        if (err) {
          console.error("Ert Boiler Plate Error");
        } else {
          console.log(
            "Ert Project started on:",
            "http://" +
              (process.env.APP_HOST || "localhost") +
              ":" +
              (process.env.APP_PORT || 8080)
          );
        }
      }
    );
  }
})();
