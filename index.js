var mysql = require("mysql");
var inquirer = require("inquirer");
var consoletable = require("console.table");
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "employeeTracker_DB"
});

connection.connect(function(err) {
  if (err) throw err;
 createDepartment();
});

function createDepartment() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Which would you like to create?",
      choices: ["Department", "Role", "Employee"]
    })
    // f.then(function(answer) {
     // switch (answer.action) {
        .then(function(answer) {
          // based on their answer, either call the bid or the post functions
          if (answer.action === "Department") {
             createDepartment();
          }
          else if(answer.acttion === "Role") {
            createRole();
          } else{answer.action === "Employee"
            createEmployee();
          } 
        
      });
    }
    
    