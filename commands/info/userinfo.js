module.exports = {
    name: "userinfo",
    code: `$sendMessage[Username: $username\nID: $authorID;no]
    $footer[Requested by $username]
    $addTimestamp`
  };