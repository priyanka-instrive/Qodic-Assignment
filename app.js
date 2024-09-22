const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const middlewareConfig = require("../Qodic-Assignment/system/middleware/config");

if (process.env.NODE_ENV === "local") {
  require("dotenv").config({
    path: `./${process.env.NODE_ENV}.env`,
  });
} else {
  require("dotenv").config({
    path: `./local.env`,
  });
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(middlewareConfig.cors));
app.use(helmet());
app.use(morgan(middlewareConfig.morganRequestFormat));
app.use(express.urlencoded({ extended: true }));

const userRoutes = require("./api/User/router");
const character = require("./api/Character/router");

app.get("/", () => {
  res.send("Health Is Ok");
});
app.use("/api/user", userRoutes);
app.use("/api/character", character);

app.listen(3000, function () {
  console.log("Listening on http://localhost:3000");
});
