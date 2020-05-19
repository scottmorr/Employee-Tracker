const mysql = require("mysql");
const { prompt } = require("inquirer");
require("console.table");
const connection = mysql.createConnection({
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
    prompt({
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
    // prompt([
    //   {
    //     type: "input",
    //     message: "What do you want to rename the Hiring Department?",
    //     name: "newName",

    //   },
      prompt({
        name: "action",
        type: "list",
        message: "Do you want to change the name from Hiring Department to new lucky hires?",
        choices: ["Change", "Keep"]
      })

      .then(function (answer) {
        if (answer.action === "Change") {
          changeDepartment();
        }
        else if (answer.action === "Keep") {
          employeeTracker();
        }
  
      });
    }



   function changeDepartment() {
   var query = connection.query(
     "UPDATE department SET ? WHERE ?",
     [
      
       {
         id: 1,
         
      },
      {
        name: "new lucky hires"
       }
     ],
     function (err, res) {
       if (err) throw err;
       console.log(res.affectedRows + " Hiring Department has been renamed to new lucky hires!\n");
       employeeTracker();
     }
   );
}


function createRole() {
    prompt([
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
    console.table(res);
    //  connection.end();
    adjustEmployee();
  })
}

function adjustEmployee() {
  
    prompt({
      name: "action",
      type: "list",
      message: "Employee Scott Morrison has been late to work lately.  Do you want to keep or fire him?",
      choices: ["Keep", "Fire"]
    })


    .then(function (answer) {
      if (answer.action === "Keep") {
        employeeTracker();
      }
      else if (answer.action === "Fire") {
        deleteEmployee();
      }

    });
}
async function deleteEmployee() {
  const employees = await 

  connection.query(
    "DELETE FROM employee WHERE  ?",
    {
      id: 1,
    

    },
    function (err, res) {
      if (err) throw err;
      connection.end();
      console.log(res.affectedRows + " employee deleted!\n");
     employeeTracker();
    }
  );
}

