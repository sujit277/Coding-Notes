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
      let products = [];
      if (!err) {
        products = JSON.parse(data);
        products.push(this);
        fs.writeFile(filepath, JSON.stringify(products), () => {
          console.log("Done");
        });
      } else {
        return;
      }
    });
  }

  static fetchAll(callback) {
    const filepath = path.join(__dirname, "../", "data", "database.json");
    fs.readFile(filepath, (err, data) => {
      if (err) {
        callback([]);
      } else {
        callback(JSON.parse(data));
      }
    });
  }
}

module.exports = Product;
