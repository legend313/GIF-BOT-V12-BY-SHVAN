const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "help",
  run: async (client, message) => {
    const embed = new EmbedBuilder()
      .setTitle("📖 Commands")
      .setDescription(`
=help
=ping
=avatar
=anime
=animal
=server
=about
=invite
=support
      `);

    message.channel.send({ embeds: [embed] });
  }
};
