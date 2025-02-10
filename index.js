const { AoiClient, LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: "bot-token-here",
  prefix: "set your prefix here",
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