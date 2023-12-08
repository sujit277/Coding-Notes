const express = require("express");
const path = require("path");
const app = express();
const errorController = require("./controllers/error");

//Dynamic Content Rendering using Ejs
app.set("view engine", "ejs");
app.set("views", "views");

//Using Express Router
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//Serving file Statically
app.use(express.static(path.join(__dirname, "public")));
app.get("*", errorController.get404);

app.listen(8080, () => {
  console.log("Server Started");
});
