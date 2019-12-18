var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Hou9ston!",
  database: "employee_trackerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add an employee",
        "Add a department",
        "Add a role",
        "View department, employee, and role",
        "Update employee roles",
        "exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Add an employee":
        addEmployee();
        break;

      case "Add a department":
        addDepartment();
        break;

      case "Add a role":
        addRole();
        break;

      case "View department, employee, and role":
        viewAll();
        break;

      case "Update employee roles":
        updateEmployee();
        break;
      
      case "exit":
      connection.end();
      break;        
      }
    });
};

function addEmployee() {
  inquirer
    .prompt([
    {
      name: "first_name",
      type: "input",
      message: "What is the employees first name?"
    },
    {
      type: 'input',
      name: 'last_name',
      message: "What's is the employees last name"
  }        
    ])
    .then(function(answer) {
      var query = " SELECT employee.first_name, employee.last_name";
      query += "INSERT INTO employee.first_name AND employee.last_name SET WHERE (first_name = ? AND last_name = ?)";

      connection.query(query, [answer.first_name, answer.last_name], function(err, res){
        for (var i = 0; i < res.length; i++) {
          console.log(
            "ID: " + 
            res[i].id +
            " || First Name: " + 
            res[i].answer.first_name + 
            " || Last Name: " + 
            res[i].answer.last_name + 
            " || Role: " + 
            res[i].role_id +
            " || Manager ID: " +
            res[i].manager_id
            );
            runSearch();
        }
      });
    });
    // logs the actual query being run
    console.log(query.sql);
};

function addDepartment() {
  inquirer
    .prompt([
    {
      name: "department",
      type: "input",
      message: "What is the department name?"
    }       
    ])
    .then(function(answer) {
      var query = "INSERT INTO department SET WHERE (department = ?)";
      connection.query(query, [answer.department], function(err, res){
        for (var i = 0; i < res.length; i++) {
          console.log(
            "ID: " + 
            res[i].id +
            " || Department: " + 
            res[i].department 
            );
            runSearch();
        } 
      });
    });
    // logs the actual query being run
    console.log(query.sql);
};

function addRole() {
  inquirer
    .prompt([
    {
      name: "department",
      type: "input",
      message: "What is the department name?"
    },
    {
      name: "title",
      type: "input",
      message: "What is title of the new role?"
    },
    {
      name: "salary",
      type: "input",
      message: "What is salary of the new role?"
    },         
    ])
    .then(function(answer) {
      var query = "INSERT INTO role SET WHERE (title = ? AND salary = ?)"

      connection.query(query, [answer.title, answer.salary], function(err, res){
        for (var i = 0; i < res.length; i++) {
          console.log(
            "ID: " + 
            res[i].id +
            " || Department: " + 
            res[i].department 
            );
            runSearch();
        } 
      });
    });
    // logs the actual query being run
    console.log(query.sql);
};

function viewAll() {
  connection.query("SELECT * FROM department", "SELECT * FROM role", "SELECT * FROM employee", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
});
}

function updateEmployee(){
  inquirer
    .prompt([
    {
      name: "first_name",
      type: "input",
      message: "What is the employee's first name?"
    },
    {
      name: "last_name",
      type: "input",
      message: "What is the employee's last name?"
    },
    {
      name: "role_id",
      type: "input",
      message: "If applicable, what is employee's new role id?"
    },
    {
      name: "manager_id",
      type: "input",
      message: "If applicable, what is the employee's new manager id?"
    },         
    ])
    .then(function(answer) {
      var query = (answer.first_name, answer.last_name, answer.role_id, answer.manager_id)
  connection.query(
    "UPDATE employee SET ? WHERE ?",
    [
      {
        first_name: "answer.first_name"
      },
      {
        last_name: "answer.last_name"
      },
      {
        role_id: "answer.role_id"
      },
      {
        manager_id: "answer.manager_id"
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteProduct();
    } 
  );
});
  // logs the actual query being run
  console.log(query.sql);
};
