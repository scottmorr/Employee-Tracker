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
      message: "Which would you like to do? Update departments,create a role, or view employee list?",
      choices: ["Department", "Role", "Employee"]
    })

    .then(function (answer) {
      if (answer.action === "Department") {
        updateDepartment();
      }
      else if (answer.action === "Role") {
        createRole();
      } else {
        answer.action === "Employee"
        viewEmployee();
      }
    });
}

function updateDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What do you want to name the Department?",
        name: "name",

      },
    ])
}

function createRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the role title?",
        name: "rollTitle",
      },

      {
        type: "input",
        message: "What is the salary per??",
        name: "hourlySalary",
      },

      {
        type: "input",
        message: "What is the department id?",
        name: "departmentId",
      },

    ])
    .then(function (answer) {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.rollTitle,
          salary: answer.hourlySalary,
          department_id: answer.departmentId,

        },
        function (err) {
          if (err) throw err;
          console.log("You created a new role without the help of your weekly tutor!!!!!!!!");
          // re-prompt the user for if they want to bid or post
          // start();
        }
      );
    });

};



function viewEmployee() {


  // function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  })

}


