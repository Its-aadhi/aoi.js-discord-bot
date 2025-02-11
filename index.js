require('dotenv').config();
const { AoiClient, LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: process.env.DISCORD_TOKEN,
  prefix: "!",
  intents: ["GUILDS", "GUILD_MESSAGES"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "572ca1fc2038da21973311f7b63ee62b",
  }
});

client.status({
  text: "Hello World!",
  type: "PLAYING",
  status: "online",
  time: 12
});

const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands");

// Register slash commands
client.on("ready", () => {
  client.application.commands.set(client.cmd.slash);
});

client.login();