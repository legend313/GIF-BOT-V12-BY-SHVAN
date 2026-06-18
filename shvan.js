const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs");
const config = require("./config.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.commands = new Collection();

fs.readdirSync("./commandgif")
  .filter(file => file.endsWith(".js"))
  .forEach(file => {
    const command = require(`./commandgif/${file}`);
    client.commands.set(command.name, command);
  });

client.on("ready", () => {
  console.log(`${client.user.tag} is online!`);
});

client.on("messageCreate", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);
  if (command) command.run(client, message, args);
});

client.login(config.token);
