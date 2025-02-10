module.exports = {
  name: "warn",
  code: `
  $sendMessage[$username[$mentioned[1]] has been warned for: $messageSlice[1];no]
  $onlyPerms[manageMessages;You do not have permission to use this command.]
  `
};