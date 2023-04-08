import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

//Serving HTML and CSS Files
/* const staticPath = path.join(__dirname, "./public");
app.use(express.static(staticPath)); */

//Normal Response Sending
/* app.get("/", (req, res) => {
    res.send("<h1 style='text-align:center;'>Hello World</h1>");
}); */

//Sending JSON data
/* app.get("/json", (req, res) => {
    res.send({
        Name: "Sujit Kumar Verma",
        Company: "EPAM Systems"
    })
}) */

//Template Engine
app.set("view engine", "hbs");
app.get("/", (req, res) => {
  res.render("index.hbs", {
    Name: "EPAM",
  });
});

app.listen(9000, () => {
  console.log("The App is Running on 9000");
});
