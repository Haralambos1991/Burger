var mysql = require("mysql");

var connection = mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"1991",
    database:"MySql"
});

sql.con.connect(function(err){
    if (err) throw (err);
    else 
console.log("Connected to the database");
});

module.exports = connection;


