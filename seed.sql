USE employeetracker_db;

INSERT INTO department (id, name)
VALUES (78, "Fred");
-- VALUES ("Wheelbarrow", "Lawn and Garden", 25), ("Treadmill", "Fitness", 250);


INSERT INTO role (title, salary, department_id)
VALUES("boss", 55, "5150");

INSERT INTO empolyee (first_name, last_name, role_id, manager_id)
VALUES("scott", "morrison", 456, 3498);


