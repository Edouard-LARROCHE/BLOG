const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  'mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.oeuhf.mongodb.net/test',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log('Mongodb connected');
    else console.log('Connection error :' + err);
  },
);
