  'use strict';

  const mongoose = require('mongoose');

  const MONGOOSE_URI = 'mongodb://localhost:27017/obadalab05';

  mongoose.connect(MONGOOSE_URI, { useUnifiedTopology: true, useNewUrlParser: true });

  const Categories = require('./models-modular/categories/categories.js');
  const categories = new Categories();



  function doWork() {
      categories.delete(2);
      categories.create({
          _id: '2',
          name: 'obada',
          description: 'person',
      }, );
      categories.update(2, {
          name: 'Brain',
      }, );

      const fetched = categories.get(2);
  }