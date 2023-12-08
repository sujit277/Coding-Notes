const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const User = require("./models/user");
const mongoConnect = require("./utils/database").mongoConnect;

//Dynamic Content Rendering using Ejs
app.set("view engine", "ejs");
app.set("views", "views");

//Using Express Router
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Finding User by ObjectId
app.use((req, res, next) => {
  User.findById("63f4fb3cb76b2d8ee609a82b")
    .then((user) => {
      //req.user = user;
      req.user = new User(user._id, user.name, user.email, user.cart);
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

mongoConnect(() => app.listen(8000));
