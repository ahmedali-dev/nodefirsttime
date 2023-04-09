const express = require("express");
const cors = require("cors");
const fs = require('fs');
const app = express();

app.use(cors());
app.options("*", cors());
app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "*");
   next();
});

app.get("/home", async (req, res) => {
   const dataread = fs.readFileSync("index.json",'utf8');
   const data = JSON.stringify(dataread);
   res.send(data);
});

app.listen(5000, () => {
   console.log("server is staring");
});
