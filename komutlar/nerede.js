const { MessageEmbed } = require("discord.js");
exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return  message.react('<a:hydra_tac:789369824249643009>')
    let embed = new MessageEmbed().setColor('RANDOM').setTimestamp().setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let user = message.guild.member(member)
    if (!user) return message.reply('Bir kullanıcı belirt')
    if (!user.voice.channel) return message.reply('Bu kullanıcı ses kanalında değil')

    let kanal = user.voice.channel
    let mik = user.voice.selfMute ? "\`Kapalı\`" : "\`Açık\`"
    let kulak = user.voice.selfDeaf ? "\`Kapalı\`" : "\`Açık\`"
    let yayın = user.voice.streaming ? "\`Açık\`" : "\`Kapalı\`"
    let kanalinfo = user.voice.channel.userLimit
    let kanaldakiler = message.guild.members.cache.filter(x => x.voice.channel && x.voice.channel.id === kanal.id).size
    if (kanal && user.voice.channel) {
      kanal.createInvite().then(invite =>
       
        message.channel.send(embed.setDescription(`
• **${user} Adlı kullanıcı \`${kanal.name}\` adlı ses kanalında.**
• **Mikrofonu:** ${mik}
• **Kulaklığı:** ${kulak}
• **Yayın Bilgisi:** ${yayın}
• **Kanal Bilgisi:** \`${kanaldakiler}/${kanalinfo}\`
• **Kanal Linki:** [tıkla](https://discord.gg/${invite.code})

`)
       ))}
};
exports.conf = {
  aliases: ["nerede"],
};

exports.help = {
  name: "nerede",
  usage:  "nerede",
  hatakodu: "109"
}