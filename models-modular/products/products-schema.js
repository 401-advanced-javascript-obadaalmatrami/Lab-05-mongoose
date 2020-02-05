

const mongoose = require('mongoose');
const schema = require('./products.js');
const product = mongoose.Schema({
  category_id: { type: 'string', required: true },
  price: { type: 'number', required: true },
  weight: { type: 'number' },
  quantity_in_stock: { type: 'number', required: true },
});

module.exports = mongoose.model('product', product);