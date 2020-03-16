var mysql = require("mysql");

// I need to create

if (process.env.GEORGEDB.SQL) {
    connection = mySql.createConnection(process.env.GeorgesDB_URL);
    // Else i am running in my localhosts friend environment//
} else {
    connection = mysql.createConnection({
        port: 3000,
        host: "localhost",
        user: "Haralambos1991",
        password: "",
        database: "burgers"
    });
}

// Right now i will make the connection to the database //

if (error) {
    console.log("ERROR: MySql failed to connect");
} else {
    console.log("I have successfully been connected to MySql database");
}

module.exports = connection;
