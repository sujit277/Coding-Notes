var express = require("express");

var app = express();

app.get("/", function (req, res) {
  var Uid = req.query.Uid;
  var Pwd = req.query.Pwd;
  strData = `Given Data is UID is ${Uid} and Password: ${Pwd}`;
  strResult =
    "<h1 style='text-align: center;'>You are not a Valid User, Please Check the Credentials </h1>";
  if (Uid == "Sujit" && Pwd == "Admin") {
    strResult =
      "<h1 style='text-align: center;'>You are a Valid User, Welcome " +
      Uid +
      "</h1>";
  }
  res.send(strResult);
});

app.listen(8000, function () {
  console.log("Server is Running at Port Number 8000");
});
