const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const errorController = require("./controllers/error");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const User = require("./models/user");

//Dynamic Content Rendering using Ejs
app.set("view engine", "ejs");
app.set("views", "views");

//Using Express Router
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Finding User by ObjectId
app.use((req, res, next) => {
  User.findById("63f581daaf45312fbf8235f8")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", adminRoutes.router);
app.use(shopRoutes);

//Serving file Statically
app.use(express.static(path.join(__dirname, "public")));

app.get("*", errorController.get404);

mongoose
  .connect(
    "mongodb+srv://Sujit7941:4dzD2ajuHQRwzmbG@project1.pxssjjx.mongodb.net/ecommercecart?retryWrites=true&w=majority"
  )
  .then(() => {
    return User.findOne().then((user) => {
      if (!user) {
        const user = new User({
          name: "Sujit",
          email: "sujit12@gmail.com",
          cart: { items: [] },
        });
        return user.save();
      }
    });
  })
  .then(() => {
    console.log("Database Connected");
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });
