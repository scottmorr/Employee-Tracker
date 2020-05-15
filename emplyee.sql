DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;

USE employeetracker_db;


CREATE TABLE department (
  id INT PRIMARY KEY,
  name  VARCHAR(30) 
);

CREATE TABLE role (
  id  INT PRIMARY KEY,
  title   VARCHAR(30),
  salary   DECIMAL(10,2),
  department_id   INT NOT NULL
);


CREATE TABLE employee (
 id INT PRIMARY KEY,
  first_name  VARCHAR(30),
  last_name  VARCHAR(30),
  role_id  INT NOT NULL,
  manager_id  INT NOT NULL
);

SELECT * FROM department;
select * from role;
select * from employee;



