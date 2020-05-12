DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE DATABASE employeeTracker_DB;

USE employeeTracker_DB;


CREATE TABLE department (
  id INT PRIMARY KEY,
  name  VARCHAR(30) 
);

CREATE TABLE role (
 PRIMARY KEY INT (id),
  title   VARCHAR(30),
  salary   DECIMAL(10,2),
  department_id   INT NOT NULL
);


CREATE TABLE employee (
 PRIMARY KEY INT(id),
  first_name  VARCHAR(30),
  last_name  VARCHAR(30),
  role_id  INT NOT NULL,
  manager_id  INT NOT NULL
);

SELECT * FROM department;
select * from role;
select * from employee;



