module.exports = {
  name: "clear",
  code: `
  $clear[$message[1]]
  $sendMessage[Cleared $message[1] messages.;no]
  $onlyPerms[manageMessages;You do not have permission to use this command.]
  `
};