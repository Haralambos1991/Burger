// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function(tableinput, cb) {
        let queryString = "SELECT * FROM" + tableinput + ";";
        connection.query(
            queryString +
                function(err, result) {
                    if (err) {
                        throw error;
                    }
                    cb(result);
                }
        );
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (?, ?)";
        queryString += printQuestionMarks(vals.length);
        queryString += " (";
        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    // Update is to update devour from false to true
    updateOne: function(table, id, cb) {
        var queryString = "UPDATE " + table + " SET ? WHERE ?";

        console.log(queryString);
        connection.query(queryString, id, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// Export the orm object for the model (burger.js)
module.exports = orm;
