const express = require('express');

const routes = express.Router();

const AnswersController = require('./controller/AnswersController');

routes.get('/answers', AnswersController.index);
routes.post('/answers', AnswersController.store);

module.exports = routes;