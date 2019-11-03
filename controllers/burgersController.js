// We will import the express//
var express = require("express");

//We do require the router//
var router = express.Router();
//We will import our burger//
var burger = require("../models/burger.js");

//Below we gonna create the router for the app//

router.get("/", function(req, res) {
    res.json({ msg: "burgers home route" });
});

router.post("/api/burgers", function(request, response) {
    burger.insertOne(request.body.burger_name, request.body.devoured, function(result) {
        response.json(result);
    });
});

router.put("/api/burgers:id", function(request, response) {
    let burger_Id = parseint(req.params.id);
    console.log("burger_id", burger_id);

    burger.updateOne([ { devoured: true }, { id: burger_id } ], function(result) {
        res.send("updated");
    });
});

module.exports = router;
