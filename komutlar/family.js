const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {

let arxemb = new Discord.MessageEmbed()
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!member) return message.reply("Bir İD Veya Üye bulunumadı.").then(x => x.delete({timeout: 50000}))
member.roles.add(ayarlar.family)
message.channel.send(arxemb.setDescription(`${member} başarıyla ailemize katıldı.Hoşgeldin`).setImage('https://media.discordapp.net/attachments/787761299374211072/787857265452777502/giphy.gif?width=400&height=200'))
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["family"],
    permLevel: 0

  }

  exports.help = {
    name: "family"
  };