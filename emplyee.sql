DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;


CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name  VARCHAR(30),
   PRIMARY KEY (id)
);

CREATE TABLE role (
  id  INT NOT NULL AUTO_INCREMENT,
  title   VARCHAR(30),
  salary   DECIMAL(10,2),
  department_id   INT NOT NULL,
 PRIMARY KEY (id)
);


CREATE TABLE employee (
 id INT NOT NULL AUTO_INCREMENT,
  first_name  VARCHAR(30),
  last_name  VARCHAR(30),
  role_id  INT NOT NULL,
  manager_id  INT NOT NULL,
 PRIMARY KEY (id)
);

SELECT * FROM department;
select * from role;
select * from employee;



