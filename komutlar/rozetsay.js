const Discord = require('discord.js');
const db = require('quick.db');
const emoji = {
   'brigade': '<a:hydra_tac:789369824249643009>',
   'partner': '<a:hydra_tac:789369824249643009> ',
   'events': '<a:hydra_tac:789369824249643009>',
   'brillance': '<a:hydra_tac:789369824249643009>',
   'bravery': '<a:hydra_tac:789369824249643009>',
   'balance': '<a:hydra_tac:789369824249643009>',
   'hunter_gold': '<a:hydra_tac:789369824249643009>',
   'hunter': '<a:hydra_tac:789369824249643009>',
   'support': '<a:hydra_tac:789369824249643009>',
   'developers': '<a:hydra_tac:789369824249643009>',
   'nitro': '<a:hydra_tac:789369824249643009>',
   'boost': '<a:hydra_tac:789369824249643009>',
   'bot': '<a:hydra_tac:789369824249643009> ',
   'onaylıbot':'<a:hydra_tac:789369824249643009> '
};

   exports.run =  async (client ,message, args) => {
    let brigade = [];
    let partner = [];
    let events = [];
    let brillance = [];
    let bravery = [];
    let balance = [];
    let hunter_gold = [];
    let hunter = [];
    let support = [];
    let developers = [];
    let nitro = [];
    let onaylı =[];
    message.guild.members.cache.forEach(async(m) => {
        const flags = m.user.flags || await m.user.fetchFlags();
        if(flags.toArray().includes('**DISCORD_EMPLOYEE**')) brigade.push(m.id);
        if(flags.toArray().includes('**DISCORD_PARTNER**')) partner.push(m.id);
        if(flags.toArray().includes('**HYPESQUAD_EVENTS**')) events.push(m.id);
        if(flags.toArray().includes('**HOUSE_BRILLIANCE**')) brillance.push(m.id);
        if(flags.toArray().includes('**HOUSE_BRAVERY**')) bravery.push(m.id);
        if(flags.toArray().includes('**VERIFIED_BOT**')) onaylı.push(m.id);
        if(flags.toArray().includes('**HOUSE_BALANCE**')) balance.push(m.id);
        if(flags.toArray().includes('**BUGHUNTER_LEVEL_2**')) hunter_gold.push(m.id);
        if(flags.toArray().includes('**BUGHUNTER_LEVEL_1**')) hunter.push(m.id);
        if(flags.toArray().includes('**EARLY_SUPPORTER**')) support.push(m.id);
        if(flags.toArray().includes('**VERIFIED_DEVELOPER**')) developers.push(m.id);
        let xxx = m.user.avatarURL({ dynamic: true });
        if(xxx.includes('gif')) nitro.push(m.id);
    });
//Elminstêr#0007
    let description = `
     > ${emoji.brigade} Discord Employee **${brigade.length}**
   > ${emoji.partner} Discord Partner **${partner.length}**
   > ${emoji.events} Hypesquad Events **${events.length}**
   > ${emoji.brillance} Brillance **${brillance.length}**
   > ${emoji.bravery} Bravery **${bravery.length}**
   > ${emoji.balance} Balance **${balance.length}**
   > ${emoji.hunter_gold} BugHunter Gold **${hunter_gold.length}**
   > ${emoji.hunter} BugHunter **${hunter.length}**
   > ${emoji.support} Early Supporter **${support.length}**
   > ${emoji.developers} Verified Developer **${developers.length}**
   > ${emoji.nitro} Nitro **${nitro.length}** (not exact)
   > ${emoji.boost} Server Booster **${message.guild.members.cache.filter(m => m.premiumSinceTimestamp).size}** (not exact)
   > ${emoji.bot} Bot **${message.guild.members.cache.filter(m => m.user.bot).size}**
   > ${emoji.onaylıbot} Verified Bot **${onaylı.length}**`;
//Elminstêr#0007
    const embed = new Discord.MessageEmbed()
    .setColor('#E70000')
    .setDescription(description);
    message.channel.send(embed);
    //Elminstêr#0007
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [], 
    permLevel: 0,
};
// Elminstêr#0007
exports.help = {
    name: 'rozet-say',
    usage: 'kullanımı',
    description: 'açıklama',
};