const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.options("*", cors());
app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "*");
   next();
});

app.get("/home", (req, res) => {
   const data = JSON.stringify({
      name: "ahmedali",
      email: "ahmedali@gmail.com",
      password: "ahmedali",
   });
   res.send(data);
});

app.listen(5000, () => {
   console.log("server is staring");
});
