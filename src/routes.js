const express = require("express");

const routes = express.Router();

const AnswersController = require("./controller/AnswersController");
const ChartController = require("./controller/ChartController");

routes.get("/answers", AnswersController.index);
routes.post("/answers", AnswersController.store);
routes.get("/makerof1", ChartController.makerOf1);
routes.get("/makerof2", ChartController.makerOf2);
routes.get("/makerof3", ChartController.makerOf3);
routes.get("/makerof4", ChartController.makerOf4);

routes.get("/", (req, res) => {
  res.send("Api is Running.");
});

module.exports = routes;
