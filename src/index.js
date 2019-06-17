const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const dbConfig = require('../credentials/db.json');

const routes = require('./routes');

const app = express();

mongoose.connect(dbConfig.dbConnectionString, {
  useNewUrlParser: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(routes);

app.listen(3000);
