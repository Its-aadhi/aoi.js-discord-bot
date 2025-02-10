module.exports = {
    name: "ban",
    code: `
    $ban[$mentioned[1]]
    $sendMessage[$username[$mentioned[1]] has been banned.;no]
    $onlyPerms[ban;You do not have permission to use this command.]
    $footer[Requested by $username]
    $addtimestamp
    `
  };