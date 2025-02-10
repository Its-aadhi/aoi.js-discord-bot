# Discord Bot with Aoi.js

This is a simple Discord bot built using the Aoi.js library. The bot includes various commands, including both regular and slash commands.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
  - [Regular Commands](#regular-commands)
  - [Slash Commands](#slash-commands)
  - [Moderation Commands](#moderation-commands)
- [Configuration](#configuration)
- [Features](#features)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- A Discord bot token

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Its-aadhi/discord-bot.git
    cd discord-bot
    ```

2. Install the dependencies:
    ```bash
    npm install aoi.js @akarui/aoi.db
    ```

3. Create a `.env` file in the root directory and add your bot token:
    ```env
    DISCORD_TOKEN=your-bot-token-here
    ```

## Usage

1. Start the bot:
    ```bash
    node index.js
    ```

2. The bot will automatically load commands from the [commands](http://_vscodecontentref_/1) directory.

## Commands

### Regular Commands

- **Ping Command**: Responds with "Pong!"
    ```javascript
    // filepath: /commands/ping.js
    module.exports = {
      name: "ping",
      code: `$sendMessage[Pong!;no]`
    };
    ```

- **Hello Command**: Greets the user
    ```javascript
    // filepath: /commands/hello.js
    module.exports = {
      name: "hello",
      code: `$sendMessage[Hello, $username!;no]`
    };
    ```

- **Clear Command**: Deletes a specified number of messages
    ```javascript
    // filepath: /commands/clear.js
    module.exports = {
      name: "clear",
      code: `
      $clear[$message[1]]
      $sendMessage[Cleared $message[1] messages.;no]
      $onlyPerms[manageMessages;You do not have permission to use this command.]
      `
    };
    ```

### Slash Commands

- **Ping Command**: Responds with "Pong!"
    ```javascript
    // filepath: /commands/slash/ping.js
    module.exports = {
      name: "ping",
      type: "slash",
      code: `$interactionReply[Pong!]`
    };
    ```

- **Hello Command**: Greets the user
    ```javascript
    // filepath: /commands/slash/hello.js
    module.exports = {
      name: "hello",
      type: "slash",
      code: `$interactionReply[Hello, $username!]`
    };
    ```

- **Server Info Command**: Displays server information
    ```javascript
    // filepath: /commands/slash/serverinfo.js
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
    ```

- **User Info Command**: Displays user information
    ```javascript
    // filepath: /commands/slash/userinfo.js
    module.exports = {
      name: "userinfo",
      type: "slash",
      code: `
      $interactionReply[Username: $username
      User ID: $authorID
      Joined Server: $memberJoinedDate
      Account Created: $creationDate[$authorID]]
      `
    };
    ```

### Moderation Commands

- **Warn Command**: Warns a user
    ```javascript
    // filepath: /commands/moderation/warn.js
    module.exports = {
      name: "warn",
      code: `
      $sendMessage[$username[$mentioned[1]] has been warned for: $messageSlice[1];no]
      $onlyPerms[manageMessages;You do not have permission to use this command.]
      `
    };
    ```

- **Kick Command**: Kicks a user
    ```javascript
    // filepath: /commands/moderation/kick.js
    module.exports = {
      name: "kick",
      code: `
      $kick[$mentioned[1]]
      $sendMessage[$username[$mentioned[1]] has been kicked.;no]
      $onlyPerms[kick;You do not have permission to use this command.]
      `
    };
    ```

- **Ban Command**: Bans a user
    ```javascript
    // filepath: /commands/moderation/ban.js
    module.exports = {
      name: "ban",
      code: `
      $ban[$mentioned[1]]
      $sendMessage[$username[$mentioned[1]] has been banned.;no]
      $onlyPerms[ban;You do not have permission to use this command.]
      `
    };
    ```

- **Unban Command**: Unbans a user
    ```javascript
    // filepath: /commands/moderation/unban.js
    module.exports = {
      name: "unban",
      code: `
      $unban[$message[1]]
      $sendMessage[User with ID $message[1] has been unbanned.;no]
      $onlyPerms[ban;You do not have permission to use this command.]
      `
    };
    ```

- **Mute Command**: Mutes a user
    ```javascript
    // filepath: /commands/moderation/mute.js
    module.exports = {
      name: "mute",
      code: `
      $giveRoles[$mentioned[1];MutedRoleID]
      $sendMessage[$username[$mentioned[1]] has been muted.;no]
      $onlyPerms[manageRoles;You do not have permission to use this command.]
      `
    };
    ```

- **Unmute Command**: Unmutes a user
    ```javascript
    // filepath: /commands/moderation/unmute.js
    module.exports = {
      name: "unmute",
      code: `
      $takeRoles[$mentioned[1];MutedRoleID]
      $sendMessage[$username[$mentioned[1]] has been unmuted.;no]
      $onlyPerms[manageRoles;You do not have permission to use this command.]
      `
    };
    ```

## Configuration

Ensure your [index.js](http://_vscodecontentref_/2) file is set up to handle both regular and slash commands:

```javascript
// filepath: /index.js
const { AoiClient, LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: process.env.DISCORD_TOKEN,
  prefix: "!",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "572ca1fc2038da21973311f7b63ee62b",
  }
});

const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands");

// Register slash commands
client.on("ready", () => {
  client.application.commands.set(client.cmd.slash);
});

client.login();


Features
Responds to regular commands
Supports slash commands
Provides server and user information
Moderation commands (clear messages, kick, ban, mute, etc.)
Examples
Ping Command:

Regular: !ping
Slash: /ping
Hello Command:

Regular: !hello
Slash: /hello
Server Info Command:

Slash: /serverinfo
User Info Command:

Slash: /userinfo
Troubleshooting
Bot not responding to commands:

Ensure the bot has the necessary permissions in the server.
Check the bot token in the .env file.
Verify that the bot is running and connected to the server.
Slash commands not working:

Ensure the bot has the applications.commands scope enabled.
Check if the slash commands are registered properly.
Contributing
Feel free to submit issues or pull requests if you find any bugs or have suggestions for new features.

Credits
Aoi.js - The library used to build the bot
@akarui/aoi.db - Database library
License
This project is licensed under the MIT License.

