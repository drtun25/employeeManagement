
-- if it exists the employees_db drops  --
DROP DATABASE IF EXISTS employees_db;
-- the "employees_db" database is created --
CREATE DATABASE employees_db;

-- Makes it so all of the following code will affect employees_db --
USE employees_db;

-- "department" --
CREATE TABLE department (

  id INT AUTO_INCREMENT NOT NULL,

  name VARCHAR(30) NOT NULL,

  PRIMARY KEY (id)
);

-- role --
CREATE TABLE role (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows  --
  id INT AUTO_INCREMENT NOT NULL,
  -- to hold title of employee --
  title VARCHAR(30) NOT NULL,
  -- to hold salary for this position --
  salary DECIMAL NOT NULL,
--   to hold reference to department
  department_id INT,
--   name the primary key
  PRIMARY KEY (id)
);

-- employee --
CREATE TABLE employee (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT AUTO_INCREMENT NOT NULL,
--   to hold employee first name
  first_name VARCHAR(30) NOT NULL,
--   to hold employee last name
  last_name VARCHAR(30) NOT NULL,
--   to hold reference to role employee has
  role_id INT NOT NULL,
--   to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
  manager_id INT,
  --   name the primary key
  PRIMARY KEY (id)
);