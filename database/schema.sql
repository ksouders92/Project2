DROP DATABASE IF EXISTS flight_times;

/* Create database */
CREATE DATABASE flight_times;
USE flight_times;

/* Create new table with a primary key that auto-increments, and a text field */
CREATE TABLE airport (
  position INT NOT NULL,
  state VARCHAR(100) NULL,
  state_abbreviations VARCHAR(100) NULL,
  airport INT NULL,
  airport_code DECIMAL(10,4) NULL,
  domestic_arrival_time DECIMAL(10,4) NULL,
international_arrival_time DECIMAL(10,4) NULL,

  PRIMARY KEY (position)
);
