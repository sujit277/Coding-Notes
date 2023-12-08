const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const mongoose = require("mongoose");
const User = require("./models/user");

//Dynamic Content Rendering using Ejs
app.set("view engine", "ejs");
app.set("views", "views");

//Using Express Router
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Finding User by ObjectId
app.use((req, res, next) => {
  User.findById("64de360ade78b5313ada4e55")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

mongoose
  .connect(
    "mongodb+srv://Sujit_7941:Sujit_7941@project1.pxssjjx.mongodb.net/ecommercecart?retryWrites=true&w=majority"
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
  .catch((err) => console.log(err));
