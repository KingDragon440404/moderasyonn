const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('| Üzgünüm Bu Komutu Kullana Bilmen İçin `Yönetici` Yetkisine Sahip Olmalısın!')
  let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(rol => rol.name === args[0]);
  if (!rol) return message.channel.send('vereceğim Rolu Etiketle')

  
   const embed = new Discord.MessageEmbed()
     .setDescription(`Herkese ${rol} adlı rol verildi!`)
        .setColor(rol.hexColor)
   
   
   message.guild.members.cache.forEach(u => {
u.roles.add(rol)
   })
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['',''],
    permLevel: 3
}

exports.help = {
    name: 'herkeserolver',
    description: 'Etiketelediğin Rolu Herkese verir',
    usage: 'herkeserol ver rol / rol-ismi'
}