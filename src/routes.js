const express = require("express");

const routes = express.Router();

const AnswersController = require("./controller/AnswersController");
const ChartController = require("./controller/ChartController");
const UserController = require("./controller/UserController");
const SessionController = require("./controller/SessionController");

const authMiddleware = require('./middlewares/auth');

routes.post("/user", UserController.store);

routes.post("/session", SessionController.store);

routes.use(authMiddleware);

routes.get("/answers", AnswersController.index);
routes.post("/answers", AnswersController.store);

routes.get("/gera", ChartController.gera);
routes.get("/makerof1", ChartController.makerOf1);
routes.get("/makerof2", ChartController.makerOf2);
routes.get("/makerof3", ChartController.makerOf3);
routes.get("/makerof4", ChartController.makerOf4);

routes.get("/", (req, res) => {
  res.send("Api is Running.");
});

module.exports = routes;
