const express = require("express");
const app = express();

app.get('/', (request, response) => {
  response.send('<h2>Hello!</h2>');
});

app.listen(3000, () => {
  console.log('awesome');
});
