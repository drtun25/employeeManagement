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

