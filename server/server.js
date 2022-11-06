const express = require('express');
const promMid = require('express-prometheus-middleware');

const homeRoute = require('./routes/home')

const PORT = 3500

const app = express();


app.use('/', homeRoute);

app.listen(PORT, console.log(`server listening on ${PORT}`));