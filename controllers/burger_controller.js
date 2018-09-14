var connection = require("../config/connection.js");

var express = require("express");

var router = express.Router();

module.exports = function(app) {

    app.get("/", function(req, res) {
      var dbQuery = "SELECT * FROM burgers";
  
      connection.query(dbQuery, function(err, result) {

        if (err) throw err;
        console.log(result)
        res.render("index", { burgers: result });
      });
    });

    app.post("/api/add-burger", function(req, res) { 
      // var dbQuery = "INSERT INTO burgers (burger_name) VALUES ('";

      console.log(req)

      connection.query(dbQuery, function(err, res) {
        if (err) throw err;
        console.log("Burger saved");
        res.status(200)
      });

    });

    app.put("/api/update-burger/:id", function(req, res) { 
      
      var burgerID = req.params.id

      var dbQuery = "UPDATE burgers SET devoured=1 WHERE id=" + burgerID;
  
      connection.query(dbQuery, function(err, result) {
        if (err) throw err;
        console.log("Burger saved");
        res.sendStatus(200)
      });
      
    });

}