const express = require("express");
const path = require("path");
const app = express();

//Dynamic Content Rendering using Handlebars
app.set('view engine', 'handlebars');
app.set('views', 'views');

//Dynamic Content Rendering using Ejs
// app.set("view engine", "ejs");
// app.set("views", "views");

//Using Express Router
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const shopRoutes = require("./routes/shop");
app.use(shopRoutes);

app.get("/", (req, res) => {
  res.send(
    '<h1 style="text-align:center" class="heading" >Welcome to Flipkart</h1>'
  );
});

app.get("*", (req, res) =>
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
);

app.listen(8080, () => console.log("Server Started"));
