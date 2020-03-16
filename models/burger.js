//Inside your burger directory, create a folder named models.//
//In models, make a burger.js file.//
//Inside burger.js, import orm.js into burger.js//
//Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
//Export at the end of the burger.js file.//

var orm = "config/orm.js";
//We import the selectAll method to the burger.js and we trigger the callbacl function//
let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(response);
        });
    },
    // We do the same thing for the method insert one and //we pass some params like vals,cols and at the end we trigger the callback function
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(response);
        });
    },

    //At the end we update our burger menu in order to select from the listed burgers in the menu//
    updateOne: (objColVals, condition, callback) => {
        orm.updateOne("burgers", objColVals, condition, res => {
            cb(response);
        });
    },
};

//Export the database function for use by burgers controllers.js, which is the overall controller driver.
module.exports = burger;
