const mongoose = require('mongoose');
const schema = require('./categories.js');
const categories = mongoose.Schema({
  _id: { type: String },
  name: { type: String, required: true },
  description: { type: String, required: false },
});


module.exports = mongoose.model('categories', categories);