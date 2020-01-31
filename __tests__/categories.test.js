'use strict';

const Categories = require('../models-modular/categories/categories.js');

let categories = new Categories();

require('../__tests__/supergoose.js');

describe('Categories model', () => {


    it('create() a new category', () => {
        let obj = { _id: '40', name: 'ALi', description: 'driver' };

        const record = categories.create(obj);
        Object.keys(obj).forEach(key => {
            expect(record[key]).toEqual(obj[key]);
        });
    });

    it('get() a category', () => {
        let obj = { _id: '205', name: 'qusai', description: 'driver' };
        categories.create(obj);
        const record = categories.get({ _id: obj._id });
        Object.keys(obj).forEach(key => {
            expect(record[key]).toEqual(obj[key]);
        });
    });


    it('get() all categories', () => {
        let obj1 = { _id: '111', name: 'Ali', description: 'driver' };
        let obj2 = { _id: '222', name: 'Brain', description: 'driver' };

        categories.create(obj1);
        categories.create(obj2);

        const records = categories.get({});
        expect(records.count).toEqual(40);
    });

    it('update() category', () => {
        let obj = { _id: '321', name: 'Hamza', description: 'driver' };
        categories.create(obj);
        categories.update('321', { name: 'Obada' });
        const record = categories.get({ _id: obj._id });
        expect(record.name).toEqual(obj[key]);
    });

    it('delete() a category', () => {
        let obj = { _id: '456', name: 'Ibrahim', description: 'driver' };
        categories.create(obj);
        categories.delete('456');
        const record = categories.get({ _id: obj._id });
        expect(record.count).toEqual(0);
    });

});