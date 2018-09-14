var express = require("express");
var bodyParser = require("body-parser")

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burger_controller.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});