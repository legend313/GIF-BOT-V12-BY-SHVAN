const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = [
  "https://media.tenor.com/6D7M3G4v4qQAAAAC/anime-girl.gif",
  "https://media.tenor.com/4V0zK5X0n4YAAAAC/anime-girl-cute.gif"
];

let result = Math.floor(Math.random() * replies.length);

let embed = new Discord.MessageEmbed()
.setTitle("Girl Gif")
.setColor("RANDOM")
.setImage(replies[result]);

message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gifgirl"],
  permLevel: 0
};

exports.help = {
  name: "girl",
  description: "Random girl gif",
  usage: "=girl"
};
