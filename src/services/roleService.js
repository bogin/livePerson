"use strict";
const employeeService = require('./employeeService')();

function roleService() {
  
  const getTotalSalaryExpenditureByRole = (roleName) => {
    const employeesWithRole = employeeService.getEmployeesByRole(roleName);
    return employeesWithRole.map(x => x.salary).reduce((a, b) => a + b, 0);
  };

  const getAverageSalaryByRole = (roleName) => {
    const employeesWithRole = employeeService.getEmployeesByRole(roleName);
    const sumOfSalaryes = employeesWithRole.map(x => x.salary).reduce((a, b) => a + b, 0);
    return sumOfSalaryes / employeesWithRole.length;
  };
  
  return {
    getAverageSalaryByRole,
    getTotalSalaryExpenditureByRole
  };
}

module.exports = roleService;
