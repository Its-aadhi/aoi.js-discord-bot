# Discord Bot with Aoi.js

This is a simple Discord bot built using the Aoi.js library. The bot includes various commands, including both regular and slash commands.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- A Discord bot token

## Installation

1. Clone the repository:
    ```bash
    https://github.com/Its-aadhi/discord-bot.git
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
    // filepath: /commands/ping.js
    module.exports = {
      name: "ping",
      type: "slash",
      code: `$interactionReply[Pong!]`
    };
    ```

- **Hello Command**: Greets the user
    ```javascript
    // filepath: /commands/hello.js
    module.exports = {
      name: "hello",
      type: "slash",
      code: `$interactionReply[Hello, $username!]`
    };
    ```

- **Server Info Command**: Displays server information
    ```javascript
    // filepath: /commands/info/serverinfo.js
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
    // filepath: /commands/info/userinfo.js
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
