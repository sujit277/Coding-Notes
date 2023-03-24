const express = require('express');
const path = require('path');
const app = express();
const errorController = require('./controllers/error');
const User = require('./models/user');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const sequelize = require('./utils/database');
const Product = require('./models/product');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');
/* const db = require('./utils/database'); */

//Dynamic Content Rendering using Ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//Using Express Router
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    User.findAll({ where: { id: 1 } }).then((user) => {
        req.user = user[0];
        next();
    }).catch((err) => {
        console.log(err);
    })

})

app.use('/admin', adminData.router);
app.use(shopRoutes);

//DB Connection
/* db.execute('SELECT * from students').then((result) => {
    console.log(result[0],result[1]);
}).catch((err) => {
    console.log(err);
}); */

//Serving file Statically
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', errorController.get404);

//Association between the Database Tables
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });


//Syncing Sequelize with the Database

/* sequelize.sync({ force: true }).then((result) => {
    app.listen(8080);
}).catch((err) => {
    console.log(err);
}) */

sequelize.sync().then(() => {
    return User.findAll({ where: { id: 1 } })
}).then((user) => {
    if (user.length == 0) {
        return User.create({ name: 'Sujit', email: 'sujit234@gmail.com' });
    }
    return user;
}).then((user) => {
    app.listen(8080);
}).catch((err) => {
    console.log(err);
})
