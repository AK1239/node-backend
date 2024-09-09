const express = require("express");
const app = express();
const logger = require("./logger");

app.use(logger);
// app.use("/api", logger); This means all urls starting with api
// it will be applied to them

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
