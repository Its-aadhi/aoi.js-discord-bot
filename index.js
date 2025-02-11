require('dotenv').config();
const { AoiClient, LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: process.env.DISCORD_TOKEN,
  prefix: "!",
  intents: ["Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: process.env.SECURITY_KEY,
  }
});

client.status({
  name: "Streaming now!",
  type: "STREAMING",
  status: "online",
  time: 12,
  url: "hhttps://www.twitch.tv/itsaadhi"
});

const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands");

console.log("Loaded commands:", client.cmd);

client.on("ready", () => {
  if (client.cmd && client.cmd.slash) {
    client.application.commands.set(client.cmd.slash);
    console.log("Slash commands registered:", client.cmd.slash);
  } else {
    console.error("Slash commands are not defined.");
  }
});

client.login();