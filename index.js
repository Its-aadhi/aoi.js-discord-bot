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
  url: "https://www.twitch.tv/itsaadhi"
});

const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands");

console.log("Loaded commands:", client.cmd);

client.on("ready", async () => {
  if (client.cmd && client.cmd.slash) {
    try {
      await client.application.commands.set(client.cmd.slash);
      console.log("Slash commands registered globally:", client.cmd.slash);
    } catch (error) {
      console.error("Error registering slash commands:", error);
    }
  } else {
    console.error("Slash commands are not defined.");
  }
});

client.login();