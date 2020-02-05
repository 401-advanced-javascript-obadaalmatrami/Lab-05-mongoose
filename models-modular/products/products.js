

const productsSchema = require('../products/products-schema.js');

class Products {

  constructor() {}


  get(filters) {
    const query = productsSchema.find(filters);
    const result = query.exec();
    if (result.length == 1) {
      return result[0];
    } else {
      return { count: result.length, results: result };
    }
  }

  create(record) {
    return productsSchema.create(record);
  }


  update(_id, record) {

    return productsSchema.findByIdAndUpdate(_id, record, { new: true });
  }



  delete(_id) {

    return productsSchema.findByIdAndDelete(_id);
  }

}

module.exports = Products;