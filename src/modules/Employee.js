class Employee {
  constructor(user) {
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.address = user.address;
    this.salary = user.salary;
    this.roleName = user.roleName;
  }

  isEmailValid(email) {
    return email;
  }

  isRoleNameValid(roleName) {
    return roleName;
  }

  isValid(user) {
    return (
      user &&
      this.isEmailValid(user.email) &&
      user.firstName &&
      user.lastName &&
      user.address &&
      user.salary &&
      this.isRoleNameValid(user.roleName)
    );
  }
}

module.exports = Employee;
