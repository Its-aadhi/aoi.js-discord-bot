module.exports = {
    name: "kick",
    code: `
    $kick[$mentioned[1]]
    $sendMessage[$username[$mentioned[1]] has been kicked.;no]
    $onlyPerms[kick;You do not have permission to use this command.]
    $footer[Requested by $username]
    $addTimestamp
    `
  };