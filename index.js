var mysql = require("mysql");
var inquirer = require("inquirer");
var consoletable = require("console.table");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

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
      message: "Which would you like to do? Update Hiring Department, create a role, or view employee list?",
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

function updateDepartment(answer) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What do you want to rename the Hiring Department?",
        name: "newName",

      },
   ])
   // console.log("What do you want to rename the Hiring Department...\n");
      var query = connection.query(
        "UPDATE department SET ? WHERE ?",
        [
          {
            name: "new lucky hires",
         
          },
         {
           id: 1
         }
        ],
        function(err, res) {
          if (err) throw err;
          console.log(res.affectedRows + " Hiring Department updated!\n");
        employeeTracker();
        });
        
}

function createRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the new role title?",
        name: "rollTitle",
      },

      {
        type: "input",
        message: "What is the salary per hour for new role?",
        name: "hourlySalary",
      },

      {
        type: "input",
        message: "What is the department id for this new role?",
        name: "departmentId",
      },

    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.rollTitle,
          salary: answer.hourlySalary,
          department_id: answer.departmentId,

        },
        function (err) {
          if (err) throw err;
          console.log("You created a new role");          
       employeeTracker();
        }
      );
    });
};


function viewEmployee() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
employeeTracker();
  })
}




