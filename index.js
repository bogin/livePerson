const express = require("express");
const app = express();
const port = 3000;
const routes = require("./src/contents/routes");

const {
  getEmployee,
  addEmployee,
  updateEmployee,
  removeEmployee,
} = require("./src/controllers/employeeController")();
const {
  getAverageSalaryByRole,
  getTotalSalaryExpenditureByRole,
} = require("./src/controllers/roleController")();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(express.urlencoded());
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get(routes.GET_EMPLOYEE, getEmployee);
app.post(routes.ADD_EMPLOYEE, addEmployee);
app.put(routes.UPDATE_EMPLOYEE, updateEmployee);
app.delete(routes.REMOVE_EMPLOYEE, removeEmployee);

app.get(routes.getTotalSalaryExpenditureByRole, getTotalSalaryExpenditureByRole);
app.get(routes.getAverageSalaryByRole, getAverageSalaryByRole);
