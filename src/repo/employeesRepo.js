"use strict";
const Employee = require("../modules/Employee");

function employeesRepo() {
  let employees = [
    new Employee(
      "myMail1@mail.com",
      "firstName",
      "lastName",
      "address",
      12000,
      "SDE1"
    ),
    new Employee(
      "myMail2@mail.com",
      "firstName",
      "lastName",
      "address",
      22000,
      "SDE2"
    ),
    new Employee(
      "myMail3@mail.com",
      "firstName",
      "lastName",
      "address",
      32000,
      "Team Manager"
    ),
  ];

  const isNotUniqeUser = (user) => {
    return employees.find((x) => x.email === user.email);
  };

  const addEmployee = (employee) => {
    /*
        INSERT INTO Employees 
        (email, firstName, lastName, address, salary, roleName)
        values
        (&{email}, &{firstName}, &{lastName}, &{address}, &{salary}, &{roleName})
      */
    employees.push(new Employee(employee));
  };

  const getEmployeeByEmail = (email) => {
    /*
      SELECT top(1) from Employees where email = ${email}
      */
    console.log(email);
    return employees.find((x) => x.email === email);
  };

  const updateEmployee = (user) => {
    /*
      UPDATE Employess set firstName = ${firstName},
      lastNmae = ${lastName}....
        where email = ${email}
      */

    //Find index of specific object using findIndex method.
    const empIndex = employees.findIndex((x) => x.email === user.email);
    if (empIndex === -1) {
      throw new Error("Did not found employee to update");
    }

    Object.keys(user).forEach((key) => {
      employees[empIndex][key] = user[key];
    });

    return true;
  };

  const removeEmployee = (email) => {
    /*
      delete Employees where email = ${email}
      */
    employees = employees.find((x) => x.email !== email);
  };

  const getEmployeesByRole = (roleName) => {
      
      /*
      SELECT top(1) from Employees where roleName = ${roleName}
      */
    return employees.find((x) => x.roleName === roleName);
  };

  return {
    addEmployee,
    updateEmployee,
    isNotUniqeUser,
    removeEmployee,
    getEmployeesByRole,
    getEmployeeByEmail,
  };
}

module.exports = employeesRepo;
