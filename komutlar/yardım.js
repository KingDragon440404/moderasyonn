const discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {
    
    let prefix = ayarlar.prefix
const embed = new discord.MessageEmbed()
.setTitle('<a:hydra_tac:789369824249643009>  Yardım menüsü  <a:hydra_tac:789369824249643009> ')
.setURL('https://discord.gg/wB88zZrmgJ')
.setDescription(`
<a:hydrata2:791857864255078420> ${prefix}eval 
<a:hydrata2:791857864255078420> ${prefix}banner 
<a:hydrata2:791857864255078420> ${prefix}avatar 
<a:hydrata2:791857864255078420> ${prefix}edit 
<a:hydrata2:791857864255078420> ${prefix}emojiler 
<a:hydrata2:791857864255078420> ${prefix}herkeserolver / herkestenrolal
<a:hydrata2:791857864255078420> ${prefix}kullanıcıbilgi
<a:hydrata2:791857864255078420> ${prefix}oylama
<a:hydrata2:791857864255078420> ${prefix}ban
<a:hydrata2:791857864255078420> ${prefix}ban-info 
<a:hydrata2:791857864255078420> ${prefix}say
<a:hydrata2:791857864255078420> ${prefix}gel / git
<a:hydrata2:791857864255078420> ${prefix}jail
<a:hydrata2:791857864255078420> ${prefix}kes
<a:hydrata2:791857864255078420> ${prefix}kilit
<a:hydrata2:791857864255078420> ${prefix}küfür-engel / reklam-engel
<a:hydrata2:791857864255078420> ${prefix}snipe
<a:hydrata2:791857864255078420> ${prefix}tag-say
<a:hydrata2:791857864255078420> ${prefix}sil 
<a:hydrata2:791857864255078420> ${prefix}unban
<a:hydrata2:791857864255078420> ${prefix}unjail
<a:hydrata2:791857864255078420> ${prefix}unmute
<a:hydrata2:791857864255078420> ${prefix}unvmute
<a:hydrata2:791857864255078420> ${prefix}süreli
<a:hydrata2:791857864255078420> ${prefix}rolver
<a:hydrata2:791857864255078420> ${prefix}vip
<a:hydrata2:791857864255078420> ${prefix}yaz
<a:hydrata2:791857864255078420> ${prefix}yasaktag
<a:hydrata2:791857864255078420> ${prefix}rolbilgi
<a:hydrata2:791857864255078420> ${prefix}sicil
<a:hydrata2:791857864255078420> ${prefix}mute
<a:hydrata2:791857864255078420> ${prefix}jail
<a:hydrata2:791857864255078420> ${prefix}afk
<a:hydrata2:791857864255078420> ${prefix}rozetsay
<a:hydrata2:791857864255078420> ${prefix}nerede
<a:hydrata2:791857864255078420> ${prefix}yetkilerim
<a:hydrata2:791857864255078420> ${prefix}roles
<a:hydrata2:791857864255078420> ${prefix}sunucuresmi
<a:hydrata2:791857864255078420> ${prefix}pp
<a:hydrata2:791857864255078420> ${prefix}rolinfo
<a:hydrata2:791857864255078420> ${prefix}r rol verir
<a:hydrata2:791857864255078420> ${prefix}capslock-engelleme
<a:hydrata2:791857864255078420> ${prefix}random-pp
<a:hydrata2:791857864255078420> ${prefix}bansay
<a:hydrata2:791857864255078420> ${prefix}etiket-tarama 
<a:hydrata2:791857864255078420> ${prefix}family 
<a:hydrata2:791857864255078420> ${prefix}rolbilgi 
<a:hydrata2:791857864255078420> ${prefix}seskontrol
<a:hydrata2:791857864255078420> ${prefix}zengin 
<a:hydrata2:791857864255078420> ${prefix}hatırlat
<a:hydrata2:791857864255078420> ${prefix}şikayet
<a:hydrata2:791857864255078420> ${prefix}tag-info
<a:hydrata2:791857864255078420> ${prefix}fake-mesaj
<a:hydrata2:791857864255078420> ${prefix}server-info
<a:hydrata2:791857864255078420> ${prefix}forceban
<a:hydrata2:791857864255078420> ${prefix}yargı
<a:hydrata2:791857864255078420> ${prefix}sil-üye
<a:hydrata2:791857864255078420> ${prefix}unbanall
<a:hydrata2:791857864255078420> ${prefix}ping
<a:hydrata2:791857864255078420> ${prefix}çevir
<a:hydrata2:791857864255078420> ${prefix}renk
<a:hydrata2:791857864255078420> ${prefix}
<a:hydrata2:791857864255078420> ${prefix}
<a:hydrata2:791857864255078420> ${prefix}
<a:hydrata2:791857864255078420> ${prefix}

`)
.setFooter(`${message.author.username}`)
.setImage('https://media.discordapp.net/attachments/903609012170403861/903609099839758406/arionlnsthydra.png')
.setTimestamp()
message.channel.startTyping();
setTimeout(function(){
    message.channel.stopTyping();
    message.channel.send(embed);
}, 1000);    
}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: []
}
exports.help = {
name: "yardım"    
}