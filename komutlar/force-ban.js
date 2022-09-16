const Discord = require("discord.js"); //Dcs Ekibi
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply("<a:hydratac:789369824249643009> **Yetersiz Yetki!** <a:hydratac:789369824249643009>");
  let dcs_user = args[0];
  if (isNaN(dcs_user)) return message.reply("<a:hydratac:789369824249643009> **Doğru ID Girmelisiniz!** <a:hydratac:789369824249643009>");
  await message.guild.members.ban(dcs_user);
  return message.reply(`<a:hydratac:789369824249643009> \`${dcs_user}\` **Sunucudan Banlandı!** <a:hydratac:789369824249643009>`);
}; //Dcs Ekibi
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["idban"]
};

exports.help = {
  name: "forceban",
  description: "ID ile Sunucudan Birisini Banlar!",
  usage: "forceban <kullanıcı-id>"
};