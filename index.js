const cTable = require("console.table");
const inquirer = require("inquirer");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3333,

    user: "root",

    password: "password",

    database: "employee_db"
});


//for errors
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  askQuestions();
});

//the app starts with questions
function askQuestions() {
  inquirer.prompt({
      message: "what would you like to do?",
      type: "list",
      choices: [
          "view all employees",
          "view all departments",
          "add employee",
          "add department",
          "add role",
          "update employee role",
          "QUIT"
      ],
      name: "choice"
  }).then(answers => {
      console.log(answers.choice);
      switch (answers.choice) {
          case "view all employees":
              viewEmployees()
              break;

          case "view all departments":
              viewDepartments()
              break;

          case "add employee":
              addEmployee()
              break;

          case "add department":
              addDepartment()
              break;

          case "add role":
              addRole()
              break;

          case "update employee role":
              updateEmployeeRole();
              break;

          default:
              connection.end()
              break;
      }
  })
}

function viewEmployees() {
  connection.query("SELECT * FROM employee", function (err, data) {
      console.table(data);
      askQuestions();
  })
}

function viewDepartments() {
  connection.query("SELECT * FROM department", function (err, data) {
      console.table(data);
      askQuestions();
  })
}

function addEmployee() {
  inquirer.prompt([{
          type: "input",
          name: "firstName",
          message: "What is the employees first name?"
      },
      {
          type: "input",
          name: "lastName",
          message: "What is the employees last name?"
      },
      {
          type: "number",
          name: "roleId",
          message: "What is the employees role ID"
      },
      {
          type: "number",
          name: "managerId",
          message: "What is the employees manager's ID?"
      }
  ]).then(function(res) {
      connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
          if (err) throw err;
          console.table("Successfully Inserted");
          askQuestions();
      })
  })
}