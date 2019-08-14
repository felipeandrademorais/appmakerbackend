const express = require('express');

const routes = express.Router();

const AnswersController = require('./controller/AnswersController');

routes.get('/answers', AnswersController.index);
routes.post('/answers', AnswersController.store);
routes.get('/', (req, res) => {
    res.send({ message: "Server is runing" });
});

module.exports = routes;