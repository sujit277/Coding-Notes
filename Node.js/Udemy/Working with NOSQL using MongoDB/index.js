const express = require('express');
const path = require('path');
const app = express();
const errorController = require('./controllers/error');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const User = require('./models/user');
const mongoConnect = require('./utils/database').mongoConnect;

//Dynamic Content Rendering using Ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//Using Express Router
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Finding User by ObjectId
app.use((req, res, next) => {
    User.findById('63e1077f47323cb8d2f79a10').then((user) => {
        //console.log(user);
        //req.user = user;
        req.user = new User(user.name, user.email, user.cart, user._id);
        //console.log(req.user._id);
        //console.log("Req User",req,user);
        next();
    }).catch((err) => {
        console.log(err);
    })

})

app.use('/admin', adminData.router);
app.use(shopRoutes);

//Serving file Statically
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', errorController.get404);

mongoConnect(client => {
    //console.log(client);
    app.listen(8000);
})
