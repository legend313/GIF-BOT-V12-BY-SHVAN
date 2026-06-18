const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");

const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

console.log("Bot is starting...");

// Load commands
fs.readdir("./commandgif/", (err, files) => {
  if (err) console.error(err);

  files.forEach(file => {
    let props = require(`./commandgif/${file}`);

    console.log(`Loaded command: ${props.help.name}`);

    client.commands.set(props.help.name, props);

    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

// Load events
require("./util/eventLoader")(client);

client.on("ready", () => {
  console.log(`${client.user.tag} is online!`);

  client.user.setActivity(`${config.prefix}help`, {
    type: "LISTENING"
  });
});

// Login bot
client.login(config.token);
