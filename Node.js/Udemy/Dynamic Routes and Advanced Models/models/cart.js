const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../', 'data', 'cart.json');

class Cart {
    static addProduct(id, productprice) {

        //Fetch the Previous Cart Items
        fs.readFile(filePath, (err, data) => {
            var cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(data);
            }

            //Analyze the Cart and Find Existing Product
            const existingProductIndex = cart.products.findIndex(prodt => prodt.id == id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;

            //Add New Product and Increase Qauntity
            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct]
            }
            cart.totalPrice = cart.totalPrice + (+productprice);
            fs.writeFile(filePath, JSON.stringify(cart), err => {
                //console.log(err);
            })
        })

    }
}


module.exports = Cart;


