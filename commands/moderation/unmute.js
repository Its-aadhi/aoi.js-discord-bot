module.exports = {
  name: "unmute",
  code: `
  $takeRoles[$mentioned[1];MutedRoleID]
  $sendMessage[$username[$mentioned[1]] has been unmuted.;no]
  $onlyPerms[manageRoles;You do not have permission to use this command.]
  `
};