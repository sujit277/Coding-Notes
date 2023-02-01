const fs = require('fs');
const path = require('path');
const Cart = require('./cart');

const products = [];

class Product {
    constructor(id, name, imageUrl, price, description) {
        this.id = id;
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
            if (this.id) {
                const existingProductIndex = products.findIndex(prod => prod.id == this.id);
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(filepath, JSON.stringify(updatedProducts), () => {
                    console.log("Done");
                });
                return;
            }
            this.id = Math.floor(Math.random() * 101);
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

    static findById(id, callback) {
        const filepath = path.join(__dirname, '../', 'data', 'database.json');
        fs.readFile(filepath, (err, data) => {
            if (err) {
                callback({});
            }
            const parsedData = JSON.parse(data);
            const product = parsedData.find(element => element.id == id);
            callback(product);
        })
    }

    static deleteById(id) {
        const filepath = path.join(__dirname, '../', 'data', 'database.json');
        fs.readFile(filepath, (err, data) => {
            const parsedData = JSON.parse(data);
            const product = parsedData.filter((prod) => prod.id == id)
            const updatedProducts = parsedData.filter(element => element.id != id);
            fs.writeFile(filepath, JSON.stringify(updatedProducts), err => {
                if (!err) {
                    Cart.deleteProduct(id, product.price);
                }
            })
        })
    }


}

module.exports = Product;