CREATE DATABASE burger_db;
USE burgers_db;

CREATE TABLE

(
    id INT NOT NULL ,
    burger_name varchar(155) NOT NULL ,
    devoured BOOLEAN NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
)