"use strict";
const employeeService = require("../services/employeeService")();

function employeeController() {
  function getEmployee(req, res) {
    console.log(req.params);
    const employee = employeeService.getEmployee(req.params.email);
    if (!employee) {
      res.status(404).send("Not found");
    }
    res.send(employee);
  }

  function addEmployee(req, res) {
    try {
      employeeService.addEmployee(req.body.user);
      res.status(200).send("Employee Added");
    } catch (e) {
      res.status(500).send(e);
    }
  }

  function updateEmployee(req, res) {
    try {
      employeeService.updateEmployee(req.body.user);
      res.status(200).send("Employee Updated");
    } catch (e) {
      res.status(500).send(e);
    }
  }

  function removeEmployee(req, res) {
    employeeService.removeEmployee(req.body.email);
    res.status(200).send("succsess");
  }

  return {
    getEmployee,
    addEmployee,
    updateEmployee,
    removeEmployee,
  };
}

module.exports = employeeController;
