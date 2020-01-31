'use strict';

const categoriesSchema = require('../categories/categories-schema.js');

class Categories {

    constructor() {

    }

    get(filters) {

        const query = categoriesSchema.find(filters);
        const result = query.exec();
        if (result.length == 1) {
            return result[0];
        } else {
            return { count: result.length, results: result };
        }
    }


    create(record) {

        return categoriesSchema.create(record);
    }

    update(_id, record) {

        return categoriesSchema.findByIdAndUpdate(_id, record, { new: true });
    }


    delete(_id) {

        return categoriesSchema.findByIdAndDelete(_id);
    }

}

module.exports = Categories;