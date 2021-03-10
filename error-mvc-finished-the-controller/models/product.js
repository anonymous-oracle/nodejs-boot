// const products = [];
const fs = require('fs');
const path = require('path');

const filePath = path.join(path.dirname(__dirname),
        'data',
        'products.json');

const getProductsFromFile = (callBackFn) => {
    fs.readFile(filePath, (err, fileContent) => {
        if (err) {
            return callBackFn([]); // so that the following code is not executed
        }
        callBackFn(JSON.parse(fileContent));
    });
};

module.exports = class Product {
    constructor(title) {
        this.title = title;

    }

    saveFile() {
        // const filePath = path.join(path.dirname(__dirname), 'data', 'products.json');
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callBackFn) {
        getProductsFromFile(callBackFn);
        // return products;
    }
}
