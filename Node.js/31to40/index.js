import express from "express";
import path from "path";
import hbs from "hbs";
import { fileURLToPath } from 'url';
import { dirname } from 'path'; 


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const staticPath = path.join(__dirname, "./partials");

const app = express();

app.set("view engine", "hbs");
hbs.registerPartials(staticPath);

//Rendering Index page
app.get("/", (req, res) => {
    res.render("index.hbs");
});

//Render Error page if none of the route is matched
app.get("*", (req, res) => {
    res.render("404.hbs");
})

app.listen(9000, () => {
    console.log("Server Started at 9000");
});