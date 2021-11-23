const cTable = require("console.table");
const inquirer = requirer("inquirer");
const sql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3333,

    user: "root",

    password: "password",

    database: "employee_db"
});

inquirer
  .prompt({
    type: "list",
    message: "What do you want to do?",
    name: "option",
    choices: ["add", "view", "remove"]
  })
  .then(function(answer) {
    console.log(answer);
    if (answer.option === "add") {
      inquirer
        .prompt({
          type: "list",
          message: "What do you want to add?",
          name: "option",
          choices: ["department", "role", "employee"]
        })
        .then(function(answer) {
            console.log(answer);

            if (answer.option === "department") {
                inquirer
                  .prompt({
                    type: "input",
                    message: "What is the name of the department you want to add?",
                    name: "option"
                  })
                  .then(function(answer) {
                    console.log(answer);
                    connection.connect();
  
                    connection.query(
                      "INSERT INTO department SET ?",
                      { name: answer.option },
                      function(error, results, fields) {
                        if (error) throw error;
                        console.log(results);
                      }
                    );
                  });
              }
  
