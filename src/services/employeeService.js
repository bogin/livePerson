"use strict";
const Employee = require("../modules/Employee");
const employeesRepo = require("../repo/employeesRepo")();
const { availableRoles } = require("../repo/roleRepo")();

function employeeService() {
  const isSalaryOutOfRoleRange = (user) => {
    const role = availableRoles.find((x) => x.roleName === user.roleName);
    return (
      role.salaryRangeFrom > user.salary && role.salaryRangeTo < user.salary
    );
  };

  const addEmployee = (userFromPost) => {
    const isNewEmployeeValid = Employee.isValid(userFromPost);
    if (!isNewEmployeeValid) {
      // if you make it, add why is not valid;
      throw new Error("the employee is not valid");
    }

    const isNotUniqeUser = employeesRepo.isNotUniqeUser(userFromPost);
    if (isNotUniqeUser) {
      throw new Error("This employee is already exist");
    }

    const isSalaryOutOfRange = isSalaryOutOfRoleRange(userFromPost);
    if (isSalaryOutOfRange) {
      throw new Error("This employee salary is out of role range");
    }

    employeesRepo.addEmployee(userFromPost);
  };

  const getEmployee = (email) => {
    console.log(email);
    return employeesRepo.getEmployeeByEmail(email);
  };

  const updateEmployee = (userFromPut) => {
    return employeesRepo.updateEmployee(userFromPut);
  };

  const removeEmployee = (email) => {
    return employeesRepo.removeEmployee(email);
  };

  const getEmployeesByRole = (roleName) => {
      return employeesRepo.getEmployeesByRole(roleName);
  };

  return {
    addEmployee,
    getEmployee,
    updateEmployee,
    removeEmployee,
    getEmployeesByRole,
  };
}

module.exports = employeeService;
