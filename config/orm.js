var connection = require("./connection.js");

var orm = {

    selectAll: function() {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
          });
    },
    insertOne: function(arg) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES ('" + arg + "'";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
          });
    },
    updateOne: function() {

    }

};

module.exports = orm;
