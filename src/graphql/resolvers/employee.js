//Models
// const employee = require('../../models/employee');
const Employee = require('../../models/employee');
// const User = require('../../models/user');

//Merge-resolver
const { transformEmployee } = require('./merge');

module.exports = {
  //Get all employees
  employees: async () => {
    try {
      const employees = await Employee.find();
      return employees.map(employee => {
        return transformEmployee(employee);
      });
    } catch (err) {
      throw err;
    }
  },
  //Create a employee
  createEmployee: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated!');
    }
    const employee = new Employee({
      name: args.employeeInput.name,
      mobile: args.employeeInput.mobile,
      DOJ: args.employeeInput.DOJ,
    });
    let createdEmployee;
    try {
      const result = await employee.save();
      createdEmployee = transformEmployee(result);
      return createdEmployee;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};