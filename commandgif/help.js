const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const embed = new Discord.MessageEmbed()
.setTitle("Commands")
.setColor("BLUE")
.setDescription(`
=girl
=boy
=anime
=ping
=help
`);

message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardim"],
  permLevel: 0
};

exports.help = {
  name: "help",
  description: "Shows commands",
  usage: "=help"
};
