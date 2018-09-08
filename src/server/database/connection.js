const mongoose = require('mongoose');

const uri = `mongodb://toskanoska:Frankenstein@tamagotchi-shard-00-00-9xrm2.mongodb.net:27017,
    tamagotchi-shard-00-01-9xrm2.mongodb.net:27017,
    tamagotchi-shard-00-02-9xrm2.mongodb.net:27017/test?ssl=true&replicaSet=Tamagotchi-shard-0&authSource=admin&retryWrites=true`;

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