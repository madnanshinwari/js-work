class Employees {
  constructor(firstName, lastName, no_of_year_worked) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.no_of_year_worked = no_of_year_worked;
  }
  empDetails() {
    document.write(`
    Employee Name: ${this.firstName} ${this.lastName}
    Employee Experiance : ${this.no_of_year_worked}
    <br>
    `);
  }
}

// Employees.prototype.empDetails(){
//     document.write(`
//     Employee Name: ${this.firstName} ${this.lastName}
//     Employee Experiance : ${this.no_of_year_worked}

//     `)
// }

emp1 = new Employees("Ali ", "khan", 10);
emp2 = new Employees("fahad ", "khan", 14);
emp3 = new Employees("shiekh ", "noor", 12);
emp_list = [emp1, emp2, emp3];

for (let i = 0; i < emp_list.length; i++) {
  emp_list[i].empDetails();
}
