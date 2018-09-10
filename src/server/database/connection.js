const mongoose = require('mongoose');

const uri = `mongodb+srv://toskanoska:Frankenstein@tamagotchi-9xrm2.mongodb.net/test?retryWrites=true`;
const options = {
  useNewUrlParser: true
};

function dbconnect() {
  mongoose.connect(uri, options)
  .then(() => {
    console.log('connected');
  })
  .catch(error => {
    console.log('error', error)
  });
};

module.exports = dbconnect;