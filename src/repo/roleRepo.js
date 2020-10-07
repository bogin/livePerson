"use strict";
const Role = require('../modules/Role');
function roleRepo() {
  const sde1Role = new Role("SED1", 10000, 20000);
  const sde2Role = new Role("SED2", 20000, 30000);
  const tmRole = new Role("Team Manager", 30000, 40000);
  const availableRoles = {
    sde1Role,
    sde2Role,
    tmRole,
  };
  
  return {
    availableRoles
  };
}

module.exports = roleRepo;
