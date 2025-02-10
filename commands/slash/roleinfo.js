module.exports = {
    name: "roleinfo",
    type: "slash",
    code: `
    $interactionReply[Role Name: $roleName[$mentionedRoles[1]]
    Role ID: $mentionedRoles[1]
    Role Color: $roleColor[$mentionedRoles[1]]
    Role Members: $roleMembersCount[$mentionedRoles[1]]]
    `
  };