const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const PORT = process.env.port || 3000;
const app = express();
//Serve static content for the app from the "public  " directory in the application directory.
app.use("/public", express.static("public"));
//Handling data parsing with express//
//app.use(bodyParser.urlencoded({ extended: true }));
//Right now we gonna set our handlebars//

app.engine(
    ".hbs",
    exphbs({
        defaultLayout: "main",
        extname: ".hbs",
        layoutsDir: path.join(__dirname, "views/layouts")
    })
);

app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));
//Right now we gonna import routes and we gonna give the server access to them//
var burgerRoutes = require("./controllers/burgersController.js");
app.use("/burgers", burgerRoutes);
//app.use(routes);
app.get("/", function(req, res) {
    // res.send("The app is successfully working. <a href='/burgers'>burgers</a>");
    res.render("index.handlebars");
    //app.get("/", function(req, res) {
    //res.send("testing");
    //});
    //Right now we gonna start our app//
});
app.listen(PORT, function() {
    console.log("App is listening on Port: " + PORT);
});
