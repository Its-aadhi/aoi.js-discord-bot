module.exports = {
  name: "botinfo",
  code: `
  $sendMessage[Bot Name: $username[$clientID]
  Bot ID: $clientID
  Servers: $serverCount
  Users: $allMembersCount;no]
  `
};``