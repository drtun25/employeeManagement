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
