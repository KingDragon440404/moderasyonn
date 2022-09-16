const { MessageEmbed } = require("discord.js");
const ayarlar = require("../ayarlar.json");
// module.exports.onLoad = (client) => {}
module.exports.run = (client, message, args) => {
  
  if(!['849358499254894623'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('')) return message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(`Başarısız !`).then(x => x.delete({timeout: 5000})).setDescription(`
<a:hydrastarrr:802176913757831198> **Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta <a:hydrastarrr:802176913757831198>**`))
                                                                                                                                        

  
  const embed = new MessageEmbed()
    
  .setImage('https://images-ext-2.discordapp.net/external/PZHmiKNAhNUe6FCYJ3j5_4EfCSix58X50xdAATIXyS4/https/media.discordapp.net/attachments/736201240001773639/736627158918889472/dd5febc9c07953b6af914e85367946cd.gif?width=324&height=178')
  .setColor('#4c001d')
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
  message.channel.send(embed.setDescription(` 
<a:hydratac:789369824249643009> <@${message.author.id}> **Sunucu Sahibi Belirdi!** <a:hydratac:789369824249643009> 
    
  `)); 
  message.react(ayarlar.emoji.diğer.taç) 

};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["x"],
  permLvl: 0,
}

  exports.help = {
  name: 'x'
}