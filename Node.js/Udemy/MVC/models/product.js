const fs = require('fs');
const path = require('path');

const products = [];

class Product {
    constructor(name, imageUrl, price, description) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        const filepath = path.join(__dirname, '../', 'data', 'database.json');
        fs.readFile(filepath, (err, data) => {
            let products = [];
            if (!err) {
                products = JSON.parse(data);
            }
            console.log(data);
            products.push(this);
            fs.writeFile(filepath, JSON.stringify(products), () => {
                console.log("Done");
            });
        })
    }

    static fetchAll(callback) {
        const filepath = path.join(__dirname, '../', 'data', 'database.json');
        fs.readFile(filepath, (err, data) => {
            if (err) {
                callback([]);
            }
            callback(JSON.parse(data));
        })
    }
}

module.exports = Product;