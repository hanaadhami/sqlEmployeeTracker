DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,,
  name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,2) NULL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("music");

INSERT INTO department (name)
VALUES ("marketing");

INSERT INTO department (name)
VALUES ("HR");

INSERT INTO department (name)
VALUES ("accounting");

INSERT INTO role (title, salary, department_id)
VALUES ("VP of Music", 90000.54, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("VP of Marketing", 104,486.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Head of HR", 94,486.00, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Acct Director", 190,486.00, 4);


INSERT INTO employee (first_name, last_name)
VALUES ("aubrey", "graham");

INSERT INTO employee (first_name, last_name)
VALUES ("brad", "pitt");

INSERT INTO employee (first_name, last_name)
VALUES ("beyonce", "knowles");

INSERT INTO employee (first_name, last_name)
VALUES ("mickey", "mouse");

SELECT * FROM department;
select * from role;
SELECT * FROM employee;