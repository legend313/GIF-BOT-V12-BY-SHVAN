module.exports = {
  name: "ping",
  run: async (client, message) => {
    message.reply(`🏓 ${client.ws.ping}ms`);
  }
};
