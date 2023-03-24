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
const flash = require('connect-flash');
const multer = require('multer');

const MONGODB_URI = 'mongodb+srv://Sujit7941:4dzD2ajuHQRwzmbG@project1.pxssjjx.mongodb.net/authentication';

const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'

});

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

//Dynamic Content Rendering using Ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//Using Express Router
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Handling Image as a Input
app.use(multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname);
    }
}));
const upload = multer({ storage: fileStorage }).single('image')
app.use(flash());

//Serving file Statically
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'my-secret', resave: false, saveUninitialized: false, store: store }));

//Finding User by ObjectId
app.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    }
    User.findById(req.session.user._id).then((user) => {
        if (!user) {
            return next();
        }
        req.user = user;
        next();
    }).catch((err) => {
        throw new Error(err);
        next();
    })

})

app.use('/admin', adminData.router);
app.use(shopRoutes);
app.use(authRoutes);
app.get('*', errorController.get404);
app.use((error, req, res, next) => {
    console.log(error);
})


mongoose.connect('mongodb+srv://Sujit7941:4dzD2ajuHQRwzmbG@project1.pxssjjx.mongodb.net/authentication?retryWrites=true&w=majority')
    .then(() => {
        console.log("Database Connected");
        app.listen(8000);
    }).catch((err) => {
        console.log(err);
    })

module.exports = { upload }
