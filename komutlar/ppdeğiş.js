const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if(message.author.id !== '789115192838586399') return;
    let ayarlanan = args[0]
    client.user.setAvatar(ayarlanan)   
    message.channel.send(`PP başarılı bir şekilde değiştirildi`)
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['pp', 'pp-ayarla'],
  permLevel: 2
};

exports.help = {
  name: 'ppdeğiştir',
  description: 'Botun avatarını ayarlar.',
  usage: 'ppdeğiştir'
};