const express = require("express");
const app = express();
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");
const User = require("./models/user");

const MONGODB_URI =
  "mongodb+srv://Sujit_7941:Sujit_7941@project1.pxssjjx.mongodb.net/flipkart";

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

//Dynamic Content Rendering using Ejs
app.set("view engine", "ejs");
app.set("views", "views");

//Using Express Router
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

//Finding User by ObjectId
app.use((req, res, next) => {
  User.findById("63f581daaf45312fbf8235f8")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

mongoose
  .connect(
    "mongodb+srv://Sujit_7941:Sujit_7941@project1.pxssjjx.mongodb.net/flipkart?retryWrites=true&w=majority"
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
