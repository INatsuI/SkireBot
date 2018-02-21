const Discord = require('discord.js');

const bot = new Discord.Client({disableEveryone: true});
var prefix = ("&");

bot.on('ready', () => {
    bot.user.setGame("SkireNetwork | En dév")
    console.log("Bot Go !");
});

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "Joueur")
    member.guild.channels.find("name", "arrives").send(`🎆 [+] ${member.user.username}`)
    member.addRole(role)
})


bot.on("guildMemberRemove", member =>{
    member.guild.channels.find("name", "arrives").send(`🎇 [-] ${member.user.username}`)

})


bot.login('NDE1NTczMDkwNDA0NDAxMTUy.DW34HQ.RxfzsUnyMdWeC2FM7BKqqzTL-pA');


bot.on('message', message => {
    if (message.content === 'MMm'){
        message.reply (':P');
        console.log("MMm");
    }

    if(message.content === prefix + 'renchannel'){
        var interval = setInterval (function (){
              message.guild.channels.find('id',"415580295476281344")
              .setName("SkireNetwork : 🎆 "+`${message.guild.members.filter(m => m.presence.status !== 'offline').size} / ${message.guild.memberCount}`+"");
        }, 1000); // intervalle entre les envoi de packet
        console.log("Commande Renchannel demandée !");

    }
}); 