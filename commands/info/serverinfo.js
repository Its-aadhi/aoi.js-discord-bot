module.exports = {
    name: "serverinfo",
    code: `$sendMessage[Server Name: $serverName\nTotal Members: $membersCount;no]
    $footer[Requested by $username]
    $addTimestamp`
};