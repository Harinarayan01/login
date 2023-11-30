const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/indext.html"));
});

app.post("/api/v1/login", (req, res) => {
    res.send(
      `<h1>Done Mr.${req.body.name}</h1><h2>your Email is ${req.body.Email} </h2> <h3>your password is ${req.body.password}</h3>`
      );
    console.log(req.body);
    });
  

app.listen(port, () => {
  console.log(`Server is working on port: ${port}`);
});
