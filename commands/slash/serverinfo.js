module.exports = {
  name: "serverinfo",
  type: "slash",
  code: `
  $interactionReply[Server Name: $serverName
  Total Members: $membersCount
  Server ID: $guildID
  Server Region: $serverRegion]
  `
};