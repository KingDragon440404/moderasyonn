const { MessageEmbed } = require('discord.js')
const datab = require('quick.db')
const moment = require('moment')
exports.run = async (client, message, args) => {

//-------------------------------------------------------------------------------\\  
  
if(!["824339767050240031"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

const banlog = message.guild.channels.cache.find(c => c.id === '804349502110040104')//Ban Log 

//-------------------------------------------------------------------------------\\


  
          let tumaylar = {
        "01": "Ocak",  
        "02": "Şubat", 
        "03": "Mart",  
        "04": "Nisan",  
        "05": "Mayıs", 
        "06": "Haziran", 
        "07": "Temmuz",
        "08": "Ağustos", 
        "09": "Eylül", 
        "10": "Ekim", 
        "11": "Kasım", 
        "12": "Aralık", 
        }
  let aylar = tumaylar;
  
let kisi = await client.users.fetch(args[0]);
if(!kisi) return message.channel.send(new MessageEmbed().setDescription(`<a:hydratac:789369824249643009> ${message.author} bir ID belirtmelisin. <a:hydratac:789369824249643009>`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

message.guild.members.unban(kisi.id)
message.channel.send(new MessageEmbed().setDescription(`<a:hydratac:789369824249643009> ${message.author} tarafından ${kisi} adlı kullanıcının sunucu yasağı kaldırıldı. <a:hydratac:789369824249643009>`).setImage('https://media.discordapp.net/attachments/787761299374211072/787857265452777502/giphy.gif?width=400&height=200').setColor('0x348f36').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic:true }))).then(x => x.delete({ timeout: 5000}))
message.react('✅')
banlog.send(new MessageEmbed().setColor('0x800d0d').setImage('https://images-ext-2.discordapp.net/external/K8wX-XK-Nm5s2cfeXVkR-tJ2vqnAaZHVsonBIyddONs/%3Fwidth%3D400%26height%3D166/https/media.discordapp.net/attachments/833366046853169234/843968072909586452/MUTANT__Kullerinden_Dogan.gif?width=320&height=133').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp().setDescription(`<a:hydratac:789369824249643009> **Sunucudan Yasağı Kaldırıldı !**\n <a:hydratac:789369824249643009>**Kaldıran Yetkili:** ${message.author} (\`${message.author.id}\`) \n<a:hydratac:789369824249643009> **Banı Kaldırılan Üye:** ${kisi} (\`${kisi.id}\`) \n <a:hydratac:789369824249643009>**Ban Kaldırma Tarihi:** \`${moment(Date.now()).add(10,"hours").format("HH:mm:ss DD MMMM YYYY")}\` `));

}
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unban", "yasak-kaldır"],
  permLvl: 0,
}

  exports.help = {
  name: 'unban'
}

