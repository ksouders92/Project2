DROP DATABASE IF EXISTS flight_times;

/* Create database */
CREATE DATABASE flight_times;
USE flight_times;

/* Create new table with a primary key that auto-increments, and a text field */
CREATE TABLE locations (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(1000) NOT NULL,
  PRIMARY KEY (id)
);
