const Discord = require('discord.js');
const db = require("quick.db");
const ayarlar = require('../ayarlar.json');
const hatamesaj = new Discord.MessageEmbed()
.setFooter("HATA!")
.setTimestamp()
.setColor("RANDOM")

let xy = '840281130834067457'
let ares = '840281127645610036'
let xx = '840281129718513664'
let arsenic = '840281127045562408' 
let hydra = '824340064833110137' 
let unregister = '840285957278007376'
let yasaktag = '789194952030683169'
let jail = '789194952030683169'
let sunucutagi = '✮'
 
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      hatamesaj.setDescription(`Bu Komutu Kullanabilmek İçin \`Yönetici\` İznine İhtiyacın Var.`)
      return message.channel.send(hatamesaj)
    }
    if(!args[0]) {
        hatamesaj.setDescription(`Bir Durum Belirtmen Gerekiyor **Örnek;**\n\`${ayarlar.prefix}yasak-tag <EKLE/LISTE/CIKAR> <TAG>\``)
        return message.channel.send(hatamesaj)
    }
    let durum = args[0]
    let tag = args.slice(1).join(' ')
    if(durum == "ekle"|| durum == "çıkar" || durum == "liste" || durum == "listele" || durum == "cıkar" || durum == "çikar") {
    if(durum == "liste" || durum == "listele") {
      let tanim = db.fetch(`yasaklitaglar_${message.guild.id}`)
      if(!tanim) db.set(`yasaklitaglar_${message.guild.id}`, [])
      if(tanim < 1) {
        const mesaj = new Discord.MessageEmbed()
        .setDescription(`Sunucumuzda herhangi yasaklanmış bir tag bulunmuyor.`)
        .setColor("RANDOM")
        return message.channel.send(mesaj)
      } else {
        let tanimm = tanim.map(aba => `Sunucuda \`${aba}\` tagını taşıyan **${message.guild.members.cache.filter(a => a.user.username.includes(aba)).size}** kullanıcı var . Şuana kadar **${db.fetch(`yasaklitagengel_${message.guild.id}_${aba}`) || 0}** kullancı engellendi.`).join('\n')
        return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(tanimm))
      }
    }
    if(durum == "ekle") {
      if(!tag) {
        hatamesaj.setDescription(`Bir Tag Belirtmen Gerekiyor **Örnek;**\n\`${ayarlar.prefix}yasak-tag <EKLE/LISTE/CIKAR> <TAG>\``)
        return message.channel.send(hatamesaj)
      }
      if(tag.includes(sunucutagi)) {
        hatamesaj.setDescription(`Yasaklamak Istediğin Tag Sunucumuzun Tagını İçermemeli.`)
        return message.channel.send(hatamesaj)
      }
      let tanim = db.fetch(`yasaklitaglar_${message.guild.id}`)
      if(!tanim) db.set(`yasaklitaglar_${message.guild.id}`, [])
      if(tanim.includes(tag)) {
        hatamesaj.setDescription(`Bu Tag Zaten Yasaklı Taglar Arasında Bulunyor.`)
        return message.channel.send(hatamesaj)
      }
      db.delete(`yasaklitagengel_${message.guild.id}_${tag}`)
      db.push(`yasaklitaglar_${message.guild.id}`, tag)
      let uyeler = message.guild.members.cache.filter(member => member.user.username.includes(tag))
      uyeler.forEach(uye => {
        uye.roles.cache.forEach(rol => {
        uye.roles.remove(rol.id)
        uye.roles.add(yasaktag)
        })
        uye.roles.remove(xy)
        uye.roles.remove(ares)
        uye.roles.remove(xx)
        uye.roles.remove(arsenic)
        uye.roles.add(jail)
        
        try {
        uye.send(`${tag} Tagı Sunucumuzda Yasaklı Listeye Girmiştir Tagı Bırakmadığınız Sürece Sunucumuzun Kanallarına Erişeyemeceksiniz.`)
        } catch (e) {
          console.log(e)
        }
      })
      const mesaj = new Discord.MessageEmbed()
      .setDescription(`\`${tag}\` Sunucunun yasaklı taglarına eklendi bu taga sahip **${uyeler.size}** kişiyi yasaklı tag'a attım.`)
     .setColor("RANDOM")
     return message.channel.send(mesaj)
   }
   if(durum == "cıkar" || durum == "çikar" || durum == "çıkar") {
     if(!tag) {
       hatamesaj.setDescription(`Bir Tag Belirtmen Gerekiyor **Örnek;**\n\`${ayarlar.prefix}yasak-tag <EKLE/LISTE/CIKAR> <TAG>\``)
       return message.channel.send(hatamesaj)
     }
     let tanim = db.fetch(`yasaklitaglar_${message.guild.id}`)
     if(!tanim) db.set(`yasaklitaglar_${message.guild.id}`, [])
     if(tanim.includes(tag)) {
     const filtre = db.get(`yasaklitaglar_${message.guild.id}`).filter(x => x !== tag)
     db.set(`yasaklitaglar_${message.guild.id}`, filtre)
     let uyeler = message.guild.members.cache.filter(member => member.user.username.includes(tag))
     uyeler.forEach(uye => {
       uye.roles.cache.forEach(rol => {
         uye.roles.remove(rol.id)
       })
       uye.roles.add(unregister)
       uye.roles.add(unregister)
      uye.roles.add(hydra)
       try {
       uye.send(`${tag} Tagı Sunucumuzda Yasaklı Taglar Listesinden Kalkmıştır ve Siz de Bu Tagı Kullandığınız İçin Kayıtsıza Atıldınız Kayıt Olup Sunucumuzun Kanallarına Erişebilirsin.`)
       } catch (e) {
         console.log(e)
       }
     })
     const mesaj = new Discord.MessageEmbed()
     .setDescription(`\`${tag}\` Sunucunun yasaklı taglarından çıkarıldı bu taga sahip **${uyeler.size}** kişiyi yasaklı tag'dan attım.`)
      .setColor("RANDOM")
      return message.channel.send(mesaj)
    } else {
      hatamesaj.setDescription(`Bu Tag Zaten Yasaklı Taglar Arasında Bulunmuyor.`)
      return message.channel.send(hatamesaj)
    }
    }
  } else {
    hatamesaj.setDescription(`Bir Durum Belirtmen Gerekiyor **Örnek;**\n\`${ayarlar.prefix}yasak-tag <EKLE/LISTE/CIKAR> <TAG>\``)
    return message.channel.send(hatamesaj)
  }
};
 
exports.conf = {
  aliases: ['yasak-tag'],
  permLevel: 0
};
 
exports.help = {
  name: 'yasaktag',
  description: 'Sunucu da tak yasaklarsınız ve taga sahip üyelerin giriş yapmasını engellersiniz.',
  usage: 'yasaktag <EKLE/LISTELE/CIKAR> <TAG>'
};//champ ?