'use strict';


class Model {
    constructor(schema) {
        this.schema = schema;
    }


    get(filters) {
        const query = this.schema.find(filters);
        const result = query.exec();
        if (result.length == 1) {
            return result[0];
        } else {
            return { count: result.length, results: result };
        }
    }

    create(record) {
        return this.schema.create(record);
    }

    update(_id, record) {
        return this.schema.findByIdAndUpdate(_id, record, { new: true });
    }


    delete(_id) {
        return this.schema.findByIdAndDelete(_id);
    }

}

module.exports = Model;