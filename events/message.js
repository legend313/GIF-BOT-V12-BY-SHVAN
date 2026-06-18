const config = require('../config.json');

module.exports = message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(config.prefix)) return;

  const client = message.client;

  let command = message.content
    .split(' ')[0]
    .slice(config.prefix.length)
    .toLowerCase();

  let params = message.content.split(' ').slice(1);

  let cmd;

  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }

  if (cmd) {
    cmd.run(client, message, params);
  }
};
