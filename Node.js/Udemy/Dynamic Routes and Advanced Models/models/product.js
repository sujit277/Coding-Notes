const fs = require("fs");
const path = require("path");
const Cart = require("./cart");

class Product {
  constructor(id, name, imageUrl, price, description) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    const filepath = path.join(__dirname, "../", "data", "database.json");
    fs.readFile(filepath, (err, data) => {
      let products = [];
      if (!err) {
        products = JSON.parse(data);
      }

      // Updating Product
      if (this.id) {
        const existingProductIndex = products.findIndex(
          (prod) => prod.id == this.id
        );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(filepath, JSON.stringify(updatedProducts), () => {
          console.log("Product Updated");
        });
        return;
      }

      // Saving new Product
      this.id = Math.floor(Math.random() * 101);
      products.push(this);
      fs.writeFile(filepath, JSON.stringify(products), () => {
        console.log("Product Saved");
      });
    });
  }

  static fetchAll(callback) {
    const filepath = path.join(__dirname, "../", "data", "database.json");
    fs.readFile(filepath, (err, data) => {
      if (!err) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }

  static findById(id, callback) {
    const filepath = path.join(__dirname, "../", "data", "database.json");
    fs.readFile(filepath, (err, data) => {
      if (!err) {
        const parsedData = JSON.parse(data);
        const product = parsedData.find((prod) => prod.id == id);
        callback(product);
      } else {
        callback({});
      }
    });
  }

  static deleteById(id) {
    const filepath = path.join(__dirname, "../", "data", "database.json");
    fs.readFile(filepath, (err, data) => {
      let parsedData, product, updatedProducts;
      if (!err) {
        parsedData = JSON.parse(data);
        product = parsedData.filter((prod) => prod.id == id);
        updatedProducts = parsedData.filter((product) => product.id != id);
      } else {
        return;
      }

      fs.writeFile(filepath, JSON.stringify(updatedProducts), (err) => {
        if (!err) {
          Cart.deleteProduct(id, product.price);
        } else {
          return;
        }
      });
    });
  }
}

module.exports = Product;
