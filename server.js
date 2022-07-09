const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist/ng-doc"));

app.get("/*", function (req, res) {
  res.send(path.join(__dirname + "/dist/ng-doc/index.html"));
});

app.listen(8080);
