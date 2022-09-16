const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const renk = args[0];

  if (!renk) return message.channel.send(`Dostum renk kodu yazmalısın`);
  const covid = `https://singlecolorimage.com/get/${renk}/64x64.png`.replace(
    " ",
    "+"
  ); //64x64 yazan yeri degiştirerek boyut ayarlayabilirsiniz.

  const embed = new Discord.MessageEmbed()
    .setTitle("Logo")
    .setColor("RANDOM")
    .setImage(covid)
    .setFooter("Başarıyla Oluşturuldu");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "renk",
  description: "Renk ararsınız",
  usage: "renk"
};   