DROP DATABASE IF EXISTS airport;

/* Create database */
CREATE DATABASE airport;
USE airport;

/* Create new table with a primary key that auto-increments, and a text field */
CREATE TABLE locations (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(1000) NOT NULL,
  PRIMARY KEY (id)
);
