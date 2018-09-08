const express = require('express');
const app = express();

const dbconnect = require('./database/connection');

app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => {
  console.log('awesome');
  dbconnect();
});