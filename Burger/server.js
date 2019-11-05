const express = require("express");
const path = require("path");
const PORT = process.env.port || 3000;
const app = express();
//Serve static content for the app from the "public  " directory in the application directory.

app.use(express.static(path.join(__dirname, "public")));

//Handling data parsing with express//
//app.use(bodyParser.urlencoded({ extended: true }));
//Right now we gonna set our handlebars//

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// Right now we gonna import routes and we gonna give the server access
// to them
var burgerRoutes = require("./controllers/burgersController.js");
app.use("/burgers", burgerRoutes);

app.get("/", function(req, res) {
    res.render("index.hbs");
});

app.listen(PORT, function() {
    console.log("App is listening on port: " + PORT);
});
