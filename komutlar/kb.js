const Discord = require('discord.js');
const moment = require('moment')

exports.run = async (client, message, params) => {

      moment.locale("tr")
      let user = message.mentions.members.first() ? message.mentions.members.first() : message.member;
  
      let online = client.emojis.cache.find(emoji => emoji.name === "cevrimici") 
      let offline = client.emojis.cache.find(emoji => emoji.name === "cevrimdisi") 
      let idle = client.emojis.cache.find(emoji => emoji.name === "bosta") 
      let dnd = client.emojis.cache.find(emoji => emoji.name === "dnd") 

      var durum = user.presence.status;
      var durum1 = (durum == "online" ? (0x00AE86) : (durum == "offline" ? (0x808080) : (durum == "idle" ? (0xFFFF00) : (durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
      var durum2 = (durum == "online" ? (`Çevrimiçi ${online}`) : (durum == "offline" ? (`Çevrimdışı ${offline}`) : (durum == "idle" ? (`Boşta ${idle}`) : (durum == "dnd" ? (`Rahatsız Etmeyin ${dnd}`) : ("Bulunamadı.")))))
      
      var olusturulma = moment(user.user.createdAt).format("DD MMMM YYYY hh:mm")

      var katilma = moment(message.guild.members.cache.get(user.user.id).joinedAt).format("DD MMMM YYYY hh:mm")
      var takmaad = (message.member.nickname || `${user.user.username} [Varsayılan]`)
      var sonuc = moment(user.user.lastMessage).format("DD MMMM YYYY hh:mm")
      var sonuc1 = sonuc

      let ogecen = Date.now() - user.user.createdAt
      let kgecen = Date.now() - user.joinedAt
      let ogun = Math.floor(ogecen / 86400000);
      let kgun = Math.floor(kgecen / 86400000);

      function kacinciOlarakGirdi(user) {
      return message.guild.members.cache.array().sort((a, b) => a.joinedAt - b.joinedAt).map(m => m.user.id).indexOf(user.id)+1;
      }
      let kacincigirdi = kacinciOlarakGirdi(user);

      var roller = user.roles.cache.filter(r => r.name !== "@everyone").array().sort((x, y) => x.position - y.position).reverse().join(' ') || "Bulunmuyor.";

      const embed = new Discord.MessageEmbed()
      .setAuthor(user.user.tag, user.user.avatarURL())
      .setThumbnail(user.user.avatarURL())
      .setColor("#00000f")
      .setDescription(`**Kullanıcı Bilgileri**\nID: ${user.user.id}\nProfil: <@${user.user.id}>\nDurum: ${durum2}\nOluşturulma: ${olusturulma} (${ogun} gün önce)  \n\n**Sunucu Bilgileri**\nSunucudaki adı: ${takmaad}\nSunucuya katılma: ${katilma} (${kgun} gün önce) \nKatılma sırası: ${kacincigirdi}/${message.guild.memberCount}\nTüm rolleri: ${roller}\n\n**Son Aktiviteleri**\nSon mesajı: ${user.user.lastMessage}\nSon görülme: ${sonuc}`)
      message.channel.send(embed)
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcıbilgi', 'kb'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  buyukIsim: 'Kullanıcı',
  kategori: 'Genel', 
  description: 'Sizin/girilenin kullanıcı bilgilerini gösterir.',
  usage: 'kullanıcıbilgi [@kullanıcı]'
};