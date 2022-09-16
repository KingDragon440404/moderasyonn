const Discord = require('discord.js');
const rdb = require('quick.db');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args) => {

 
if(!["789115192838586399"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
  return message.channel.send(`<a:hydra_goldstar:791092863806996520> Bu komutu kullanabilmek için ayarlanan kayıt yetkisine sahip olmalısınız!`).then(x => x.delete({timeout: 5000}));
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!member) return message.channel.send('<a:hydra_goldstar:791092863806996520> Bir üye etiketlemelisin.').then(x => x.delete({timeout: 5000}));
 member.roles.add(ayarlar.vip)
  let embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`<a:hydra_goldstar:791092863806996520> **${member} kişisine <@&${ayarlar.vip}> rolü başarıyla verildi** <a:hydra_goldstar:791092863806996520>`)
  .setTimestamp()
 .setImage('https://media.discordapp.net/attachments/787761299374211072/787857265452777502/giphy.gif?width=400&height=200')
  message.channel.send(embed).then(x => x.delete({timeout: 20000}));

} 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['vip'],
  permLevel: 0
}
exports.help = {
  name: 'vip',
  description: "Belirtilen üyeye kayıtsız rolü verir",
  usage: 'vip @kişi'
}