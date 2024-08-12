//Fetch data from a JSON file and logging employee details into Javascript console on browser.

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((employee) => {
      console.log(getContact(employee));
      console.log(getCurrPos(employee));
      console.log("Hire Date: " + getDaysHire(employee));
      console.log("Salary: " + employee.salary);
      console.log();
    });
  });

//Fetch the data from a JSON file and display it into the HTML browser window.

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => { 
    
    data.forEach((employee) => {
      const employeeContainer = document.createElement("div");
      employeeContainer.classList.add("employee-container");
      const HTML = `  
        <ul>
          <li> Employee Name: ${getContact(employee)}</li>
          <li> Current Position: ${getCurrPos(employee)}</li>
          <li> Hire Date: ${getDaysHire(employee)}</li>
          <li> Salary: ${employee.salary}</li>
        </ul>
        <br>
        `;
      employeeContainer.innerHTML = HTML;
      document.body.appendChild(employeeContainer);
      });
    })

  //To catch any errors

  .catch(error => {
    console.error(error);
  });

//Functions

function getContact(employee) {
  return `${employee.fName} ${employee.lName}, Phone Number: ${employee.phoneNum}`;
}

function getCurrPos(employee) {
  return employee.occupation + " - " + employee.jobDescription;
}

function getDaysHire(employee) {
  return `${employee.hireDate}`;
}
