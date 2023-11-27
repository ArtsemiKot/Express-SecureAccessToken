const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoute = require('./controller/user.controller');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/user', userRoute);
app.use((error, req, res, next) => {
  res.send(error.message);
});

module.exports = app;