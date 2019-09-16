var mysql = require("mysql");

var connection = mysql.createConnection({
port: "3000",
host: "localhost",
user: "Haralambos",
database: "sql",
password: "1991",
})
sql.con.connect(function(err){
    if (err) throw (err);
    else 
console.log("Connected to the database");
});

module.exports = connection;


