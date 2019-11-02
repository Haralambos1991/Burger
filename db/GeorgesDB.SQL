USE burger_database;
DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers
(
    id INT NOT NULL,
    burger_name VARCHAR(300) NOT NULL,
    devoured BOOLEAN NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key(id)
);

INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ("hamburger", FALSE);
INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ("cheeseburger", FALSE);
INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ("fish burger", FALSE);
INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ("slag burger", FALSE);
INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ("chilly burger", FALSE);
INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ("rice burger", FALSE);
INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ("salmon burger", FALSE);
