import express from "express";
import path from "path";
import hbs from "hbs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set("view engine","hbs");
const staticPath = path.join(__dirname,"./partials");
console.log(staticPath);
hbs.registerPartials(staticPath);

app.get("/",(req,res) => {
    res.render("index.hbs");
});

app.get("*",(req,res) => {
    res.render("404.hbs");
})

app.listen(9090,() => {
    console.log("Server Started");
});