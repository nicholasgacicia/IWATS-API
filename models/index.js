const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/yemstats'

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log(`MongoDB successfully connected to ${connectionString}`))
  .catch((err) => console.log(err));

module.exports = {
  Show: require('./Show'),
  User: require('./User'),
};
