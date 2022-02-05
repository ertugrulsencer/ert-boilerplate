const express = require("express");
const router = require("./src/router");
const app = express();

app.set("views", __dirname + "/src/views");
app.set("view-engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
app.use(router);

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
