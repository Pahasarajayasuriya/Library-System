const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.listen("5555", () => {
  console.log("Up and running! -- This is our customers service");
}