const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = [
  "https://media.tenor.com/x8v1oNUOmg4AAAAC/anime.gif",
  "https://media.tenor.com/7XqwsL8b4sAAAAAC/anime-love.gif"
];

let result = Math.floor(Math.random() * replies.length);

let embed = new Discord.MessageEmbed()
.setTitle("Anime Gif")
.setColor("RANDOM")
.setImage(replies[result]);

message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["animegif"],
  permLevel: 0
};

exports.help = {
  name: "anime",
  description: "Random anime gif",
  usage: "=anime"
};
