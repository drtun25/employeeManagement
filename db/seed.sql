USE employee_db;

INSERT INTO department (name)
VALUES 
("Sales"),
("Engineering"),
("Finance"),
("Legal");
INSERT INTO role (id, title, salary, department_id)
VALUES 
(1, 'Sales Manager', 60000, 1),
(2, 'Tech Manager', 80000, 2),
(3, 'Finance Manager', 90000, 3),
(4, 'Lead Attorney', 100000, 4);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES 
(1, 'Tony', 'Hawk', 1, 1),
(2, 'Terry', 'Crews', 2, 2),
(3, 'Lebron', 'James', 3, 3),
(4, 'Tyler', 'Perry', 4, 4);
