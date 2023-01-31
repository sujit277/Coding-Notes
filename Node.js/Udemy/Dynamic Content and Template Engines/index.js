const express = require('express');
const path = require('path');
const app = express();

//Dynamic Content Rendering Using Pug
/* app.set('view engine', 'pug');
app.set('views', 'views'); */

//Dynamic Content Rendering using Handlebars
//const handlebars = require('express-handlebars');
//app.set('view engine', 'handlebars');
//app.set('views', 'views');


//Dynamic Content Rendering using Ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//Using Different Middlewares
/* app.use((req, res, next) => {
    console.log("In the First Middleware");
    next();
})

app.use((req, res, next) => {
    console.log("In the Second Middleware");
    next();
})

app.get('/', (req, res) => {
    res.send("<h1 style='text-align:center'>Server Started Using Express</h1>");
}) */



//Handling Different routes using Middlewares
/* app.use('/about', (req, res, next) => {
    res.send('<h1 style="text-align:center">About Page</h1>')
})

app.use('/contact', (req, res, next) => {
    res.send('<h1 style="text-align:center">Contact Page</h1>')
})

app.use('/', (req, res, next) => {
    res.send('<h1 style="text-align:center">Home Page</h1>')
}) */


//Parsing incomng Request
/* app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}) */


//Using Express Router
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(adminData.router);
app.use(shopRoutes);

//If we our adminRoutes are starting /admin
//app.use('/admin',adminRoutes);


//Serving file Statically
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    console.log(adminData.products)
    res.send('<h1 style="text-align:center" class="heading" >Welcome to Flipkart</h1>');
});

app.get('*', (req, res) =>
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
)

app.listen(8080, () => {
    console.log("Server Started");
})