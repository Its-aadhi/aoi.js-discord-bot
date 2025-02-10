module.exports = {
  name: "mute",
  code: `
  $giveRoles[$mentioned[1];MutedRoleID]
  $sendMessage[$username[$mentioned[1]] has been muted.;no]
  $onlyPerms[manageRoles;You do not have permission to use this command.]
  `
};