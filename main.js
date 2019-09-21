var express = require("express");
var routes = require("./routes");
var bodyParser = require("body-parser");
var apiToken = "d8e1d4de076120a74f145416bd11d9f28f13459f";
var app = express();

// require("./addSVStopField");

app.use(bodyParser.json())
   .use(bodyParser.urlencoded({ extended: true}))
   .use("/api", routes)
   .listen(3000);
