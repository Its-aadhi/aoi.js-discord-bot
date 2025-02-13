module.exports = {
  name: "userinfo",
  type: "interaction",
  prototype: "slash",
  code: `
  $interactionReply[Username: $username
  User ID: $authorID
  Joined Server: $memberJoinedDate
  Account Created: $creationDate[$authorID]] 
  `
};
