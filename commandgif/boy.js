const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = [
  "https://media.tenor.com/9a8J7jQ3J2QAAAAC/anime-boy.gif",
  "https://media.tenor.com/4z4f4jL8Wj8AAAAC/anime-boy-cool.gif"
];

let result = Math.floor(Math.random() * replies.length);

let embed = new Discord.MessageEmbed()
.setTitle("Boy Gif")
.setColor("RANDOM")
.setImage(replies[result]);

message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gifboy"],
  permLevel: 0
};

exports.help = {
  name: "boy",
  description: "Random boy gif",
  usage: "=boy"
};
