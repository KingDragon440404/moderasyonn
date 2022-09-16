const { MessageEmbed } = require("discord.js");
const ayarlar = require("../ayarlar.json");
// module.exports.onLoad = (client) => {}
module.exports.run = (client, message, args) => {
  
  if(!['849358499254894623'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('')) return message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(`Başarısız !`).setDescription(`
<a:hydrastarrr:802176913757831198> **Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta <a:hydrastarrr:802176913757831198>**`))


  
  const embed = new MessageEmbed()
   
  .setImage('https://images-ext-2.discordapp.net/external/msTR_jhtentaRbEG_uWMBwff3g2vCiR_4qbcNwnt5AQ/%3Fwidth%3D102%26height%3D72/https/media.discordapp.net/attachments/789198309197479947/850052136472805376/765132348642951168.gif?width=82&height=58')
  .setColor('RANDOM')
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
  message.channel.send(embed.setDescription(`
  <a:hydratac:789369824249643009> <@${message.author.id}> **Sunucu Prensesi Belirdi! <a:hydratac:789369824249643009> ** 
    
  `)); 
   message.react(ayarlar.emoji.diğer.merve) 
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["m"],
  permLvl: 0,
}

  exports.help = {
  name: 'm'
}