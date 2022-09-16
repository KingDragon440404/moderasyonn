const Discord = require('discord.js'); 
const db = require('quick.db'); 
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => { 

  let user = message.mentions.members.first();
  
      if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.reply("**Rol verme yetkisi sadece ROL YÖNETME yetkisinie sahip olan kişilere aittir.**");
const kisi = message.mentions.members.first()
if (!kisi) return message.channel.send(" Rol Vereceğim Kişiyi etiketle.")

    let rol= args.slice(1).join(' ');
    let rolbul = message.guild.roles.cache.find(a => a.name.includes(rol))
    if (!rolbul) message.channel.send('Böyle bir rol bulamadım.')

    if (rolbul) user.roles.add(rolbul);

message.channel.send(`Belirttiğin kişiye **${rolbul.name}** rolünü verdim.`)

}; 


module.exports.conf = {
  aliases: [],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};
 
module.exports.help = {
  name: "rolver",
  description: "rol verir.",
  usage: "rolver @kişi rol ismi"
};