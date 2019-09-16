# Eat-Da-Burger

This app allows the user to add a burger of his choice and devour it!

# Functionality

Using an home-grown ORM, the app has 3 basic CRUD functions...

1. Read all entries from my SQL database and display them to the DOM using handlebars

2. UPDATE a selected burger by clicking "Devour It"which... * hits an /burger/eat/:id route in Express to change its "devoured" status in the MySQL database * re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars).

3. CREATE a new burger using the "Place Order" form, which... * hits a /burger/create route in Express to insert a new burger into the MySQL database * re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)

# Languages Used

* MySQL

* Express

* Javascript

* Jquery

* Handlebars

* Css

# Setup

* Switch to the config folder in the project directory and change the name of the file config_example.js to config.js.

* Open the new config.js file and follow the instructions to configure the server and login account for your MySQL installation.

* Switch to the db folder in the project directory and execute the file schema.sql in MySQL create the database for the application, burgers_db.

* Execute the file seeds.sql in the same folder to populate the database with initial data for the application.

* From a terminal window, run npm install

* Launch with by running node server



