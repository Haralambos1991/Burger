var express = require("express");
var bodyParser = require("body-parser");


let PORT = process.env.port || 3001;

var app = express();

//Serve static content for the app from the "public  " directory in the application directory.
app.use(express.static("public"));

//Handling data parsing with express//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json);



//Right now we gonna set our handlebars//
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Right now we gonna import routes and we gonna give the server access to them//
let routes = require("./controllers/burgers_controller.js");

// app.use(routes);
app.get("/", function(req,res){
    res.send('hello wolrd')
})

//Right now we gonna start our app//
app.listen(PORT, function() {
console.log("App is listening on Port: " + PORT);
});
