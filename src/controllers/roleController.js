"use strict";

const roleService = require("../services/roleService")();

function roleController() {
  function getTotalSalaryExpenditureByRole(req, res) {
    const total = roleService.getTotalSalaryExpenditureByRole(
      req.params.roleName
    );
    if (!total) {
      res.status(404).send("Not found");
    }
    res.send(total);
  }

  function getAverageSalaryByRole(req, res) {
    const avg = roleService.getAverageSalaryByRole(req.params.roleName);
    if (!avg) {
      res.status(404).send("Not found");
    }
    res.send(avg);
  }

  return {
    getAverageSalaryByRole,
    getTotalSalaryExpenditureByRole,
  };
}

module.exports = roleController;
