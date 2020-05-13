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
      // based on their answer, either call the bid or the post functions
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
    .prompt({
      name: "name",
      type: "input",
      message: "What do you want to name the Department?",

      validate: function (value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      },
    })
  createRole();
}

function createRole() {
  inquirer
    .prompt({
      name: "title",
      type: "input",
      message: "What is the role title?",
    },
      {
        name: "salary",
        type: "rawlist",
        message: "What should the starting salary be?",
        choices: ["15", "25", "35"],
      },
      {
        name: "department_id",
        type: "insert",
        message: "Please assign this new role a four-digit department id",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        },
      })
     // createEmployee();
}


// .then(function(answer) {
//   // when finished prompting, insert a new item into the db with that info
//   connection.query(
//     "INSERT INTO auctions SET ?",
//     {
//       item_name: answer.item,
//       category: answer.category,
//       starting_bid: answer.startingBid || 0,
//       highest_bid: answer.startingBid || 0
//     },
//     function(err) {
//       if (err) throw err;
//       console.log("Your auction was created successfully!");
//       // re-prompt the user for if they want to bid or post
//       start();
//     }
//   );
// });

























// ]);

// };




// createEmployee();
// }

// function createEmployee() {
//   inquirer
//   .prompt({
//   name: "employee",
//   type: "insert",
//   message: "What is the new employee's first name?",
// })
// }


