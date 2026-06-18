const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = [
  "https://media.tenor.com/hug1.gif",
  "https://media.tenor.com/hug2.gif",
  "https://media.tenor.com/hug3.gif"
];

let result = Math.floor(Math.random() * replies.length);

let embed = new Discord.MessageEmbed()
.setTitle("🤗 Hug Gif")
.setColor("RANDOM")
.setImage(replies[result]);

message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["huggif"],
  permLevel: 0
};

exports.help = {
  name: "hug",
  description: "Random hug gif",
  usage: "=hug"
};
