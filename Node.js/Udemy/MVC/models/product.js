const fs = require("fs");
const path = require("path");
class Product {
  constructor(name, imageUrl, price, description) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    const filepath = path.join(__dirname, "../", "data", "database.json");
    fs.readFile(filepath, (err, data) => {
      if (!err) {
        const products = JSON.parse(data);
        products.push(this);
        fs.writeFile(filepath, JSON.stringify(products), () => {
          console.log("Product saved successfully");
        });
      } else {
        return;
      }
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
}

module.exports = Product;
