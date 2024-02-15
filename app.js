const express = require("express");
const app = express();
const port = 4000;

app.use(express.urlencoded({static: false }));

app.use(express.json())
 
const routes = require('./routes/index')

app.use('/',routes)



app.listen(port, function () {
  console.log("Server started at port:" + port);
});
