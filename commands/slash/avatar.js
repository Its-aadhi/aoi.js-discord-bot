const { prototype } = require("aoi.js/src/events/slashOption");

module.exports = {
    name: "avatar",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[Avatar URL: $userAvatar[$mentioned[1;yes]]]`
  };