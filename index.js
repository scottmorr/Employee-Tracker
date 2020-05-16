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
  database: "employeetracker_db"
});

connection.connect(function (err) {
  if (err) throw err;
  employeeTracker();
});

function employeeTracker() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Which would you like to create?",
      choices: ["Department", "Role", "Employee"]
    })

    .then(function (answer) {
      if (answer.action === "Department") {
        createDepartment();
      }
      else if (answer.action === "Role") {
        createRole();
      } else {
        answer.action === "Employee"
        createEmployee();
      }
    });
}

function createDepartment() {
  inquirer
    .prompt([
      {
      type: "input",
      message: "What do you want to name the Department?",
      name: "name",
      











      
      validate: function (value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      },
    },
    ])
}

function createRole() {
  inquirer
    .prompt([
      {
      type: "input",
      message: "What is the role title?",
      name: "title",
      },
    ])

}

function createEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "first_name",
      }, {
        type: "input",
        message: "What is the employee's last name?",
        name: "last_name",
      },
      {
        type: "input",
        message: "Please assign new employye a 4 digit number",
        name: "role_id",
        validate: answer => {
          const pass = answer.match(/^\d{4}$/);
          if (pass) {
              return true;
          }
          return "please enter valid 4 digit id-number"
      }
      }
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          role_id: answer.role_id || 0,
        },

        function (err) {
          if (err) throw err;
          console.log("You created an authentic id successfully!");
         start();
        }
      );
    });
}





