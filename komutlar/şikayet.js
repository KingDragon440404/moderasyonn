const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.MessageEmbed()
.setDescription('**Kullanım: x!sikayet <Şikayet>**'));
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('**Şikayetiniz Bildirildi!**')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının Şikayeti:`)
.addField(`**Kulanıcı Bilgileri**`, `**Kullanıcı ID:** ${message.author.id}\n**Kullanıcı Adı:** ${message.author.username}\n**Kullanıcı Tagı:** ${message.author.discriminator}`)
.addField("**Şikayet**", type)
.setThumbnail(message.author.avatarURL)
client.channels.cache.get('1013400353049419796').send(embed2);
};
exports.conf = {
  aliases: []
};
exports.help = {
  name: 'şikayet'
};