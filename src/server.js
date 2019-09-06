const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require("cors");
const nunjucks = require("nunjucks");
const path = require('path');

const app = express();

mongoose.connect('mongodb://felipe:feli2705@ds061391.mlab.com:61391/goweek-felipe',
    {
        useNewUrlParser: true
    }
);

app.use(cors());
app.use(express.json());
app.use(routes);

nunjucks.configure(path.resolve(__dirname, 'views'), {
    autoescape: true,
    express: app
});

app.listen(process.env.PORT || 3001);