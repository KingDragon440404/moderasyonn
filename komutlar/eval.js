const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
exports.run = (client, message, args) => {
	if(message.author.id !== "789115192838586399") 
    return message.channel.send('**<a:hydratac:789369824249643009> Bu komutu sadece "Sahibim" kullanabilir!**')
  if (message.author.id === "789115192838586399")
   {
		try {
let codein = args.join(" ");
let code = eval(codein)
      
      if (codein.length < 1) return message.channel.send(`:x: Bir kod girmelisin.`)
    if (typeof code !== 'string')    
      code = require('util').inspect(code, { depth: 0 });
  
   message.channel.send('Belirttiğin, '+`\`\`\`js\n${codein}\`\`\``+' Kodunu uyguladım.')   
  } catch(e) {
    let embed2 = new Discord.RichEmbed()
    .setColor('BLUE')
    .addField('Hata', "\`\`\`js\n"+e+"\n\`\`\`")
    message.channel.send(embed2);
  }
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [kod]'
};