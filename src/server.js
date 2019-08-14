const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://felipe:feli2705@ds061391.mlab.com:61391/goweek-felipe',
    {
        useNewUrlParser: true
    }
);

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3001);
