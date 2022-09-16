const Discord = require('discord.js');
exports.run = async(client, message, args) => {
if(message.author.id !== "789115192838586399") return message.channel.send(' **Botun sahibi sen değilsin**')
if(!args[0]) return message.channel.send(" **Bir mesaj id'si gir**")
if(!args.slice(1)) return message.channel.send(' **Mesajı ne olarak editleyim yazmalısın**')
message.channel.messages.fetch(args[0]).then(tar => {
if(tar.author.id !== client.user.id) return message.channel.send(' **Bu mesaj benim değil**')
tar.edit(args.slice(1).join(' '))
})
};
exports.conf = {
aliases: []
};
exports.help = {
name: "edit",
description: "bir mesajı editler",
usage: "edit <id> <mesaj>"
};