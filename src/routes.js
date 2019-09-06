const express = require("express");

const routes = express.Router();

const AnswersController = require("./controller/AnswersController");
const ChartController = require("./controller/ChartController");

routes.get("/answers", AnswersController.index);
routes.post("/answers", AnswersController.store);
routes.get("/makerof1", ChartController.index);

routes.get("/", (req, res) => {
  res.send("Api is Running.");
});

module.exports = routes;
