'use strict';


const Products = require('../models-modular/products/products.js');
let products = new Products();

require('../supergoose.js');

describe('products model test ', () => {

    it('can create() a new product', () => {
        let obj = { _id: '30', name: 'ali', description: 'programmer' };

        const record = products.create(obj);
        Object.keys(obj).forEach(key => {
            expect(record[key]).toEqual(obj[key]);
        });
    });

    it('can get() a product', () => {
        let obj = { _id: '11', name: 'obada', description: 'programmer' };
        products.create(obj);
        const record = products.get({ _id: obj._id });
        Object.keys(obj).forEach(key => {
            expect(record[key]).toEqual(obj[key]);
        });
    });


    it('get() all products', () => {
        let obj1 = { _id: '11', name: 'obada', description: 'programmer' };
        let obj2 = { _id: '22', name: 'ahmad', description: 'programmer2' };

        products.create(obj1);
        products.create(obj2);

        const records = products.get({});
        expect(records.count).toEqual(30);
    });

    it('update() a product', () => {
        let obj = { _id: '266', name: 'obada', description: 'programmer' };
        products.create(obj);
        products.update('123', { name: 'ibrahim' });
        const record = products.get({ _id: obj._id });
        expect(record.name).toEqual('ibeahim');
    });

    it('delete() a product', () => {
        obj = { _id: '256', name: 'ahmad', description: 'programmer' };
        products.create(obj);
        products.delete('265');
        const record = products.get({ _id: obj._id });
        expect(record.count).toEqual(0);
    });

});