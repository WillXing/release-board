var express = require("express");
var app = express();

app.get("/helo", function(req, res) {
  res.send("Hello");
});

app.use(express.static("public"));

app.listen(3001, function() {
  console.log("listen: 3001")
})