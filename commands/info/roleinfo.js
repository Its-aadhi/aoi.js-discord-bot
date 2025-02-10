module.exports = {
  name: "roleinfo",
  code: `
  $sendMessage[Role Name: $roleName[$mentionedRoles[1]]
  Role ID: $mentionedRoles[1]
  Role Color: $roleColor[$mentionedRoles[1]];no]
  `
};