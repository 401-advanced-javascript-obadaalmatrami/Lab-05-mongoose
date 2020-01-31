'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
    _id: { type: String },
    name: { type: String, required: true },
    description: { type: String, required: false },
});


module.exports = mongoose.model('categories', categories);