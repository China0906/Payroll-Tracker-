// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesList = []
// Collect employee data
const collectEmployees = function() {
  const firstName = prompt("what is the employee first name")
  const lastName = prompt("what is employee last name")
  const salary = prompt( "what is the employee salary")
  const newEmployee = {
    firstName, lastName, salary 
  }
  employeesList.push(newEmployee)
  const proceed = confirm("Do you wnat to continue to add new emplyee")
  if (proceed){
    collectEmployees()
  } else {
    console.log (employeesList)
    return employeesList
  }

  // TODO: Get user input to create and return an array of employee objects
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0
  for (let i = 0;i < employeesArray.length; i++){
    sum = sum + parseFloat(employeesArray[i].salary)
  }
  const average = sum / employeesArray.length
  console.log ("average salary is " + average + " for" + employeesArray.length + " employees")
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const index = Math.floor(Math.random ()*employeesArray.length)
  const selectedEmployees = employeesArray[index] 
  // TODO: Select and display a random employee
  console.log ("selected employee is " + selectedEmployees.firstName + " "+ selectedEmployees.lastName)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employeesList);

  displayAverageSalary(employeesList);

  console.log('==============================');

  getRandomEmployee(employeesList);

  employeesList.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employeesList);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
