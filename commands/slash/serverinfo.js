module.exports = {
  name: "serverinfo",
  type: "interaction",
  prototype: "slash",
  code: `
  $interactionReply[Server Name: $serverName
  Total Members: $membersCount
  Server ID: $guildID
  Server Region: $serverRegion]
  `
};