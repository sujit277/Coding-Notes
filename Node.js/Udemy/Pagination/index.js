const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const errorController = require('./controllers/error');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');
const User = require('./models/user');

const MONGODB_URI = 'mongodb+srv://Sujit7941:4dzD2ajuHQRwzmbG@project1.pxssjjx.mongodb.net/authentication';

const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'

});



//Dynamic Content Rendering using Ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//Using Express Router
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Serving file Statically
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'my-secret', resave: false, saveUninitialized: false, store: store }));

//Finding User by ObjectId
app.use((req, res, next) => {
    User.findById('63f7904d940d45216f47b58b').then((user) => {
        req.user = user;
        next();
    }).catch((err) => {
        console.log(err);
    })

})

app.use('/admin', adminData.router);
app.use(shopRoutes);
app.use(authRoutes);

app.get('*', errorController.get404);


mongoose.connect('mongodb+srv://Sujit7941:4dzD2ajuHQRwzmbG@project1.pxssjjx.mongodb.net/authentication?retryWrites=true&w=majority')
    .then(() => {
        console.log("Database Connected");
        app.listen(8000);
    }).catch((err) => {
        console.log(err);
    })
