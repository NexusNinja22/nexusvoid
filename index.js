const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!')
    client.user.setStatus('online')
    client.user.setActivity("^help | I'm A Bot!")

})
//Moderation Commands
client.on('message', message => {
    if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) { 
        
         //console.log(message.content)

        if(message.content.startsWith(`${prefix}kick`)) {


            let member = message.mentions.members.first();
            member.kick().then((member) => {
                message.channel.send(":wave: " + member.displayName + " has been kicked!")
            })
        }
        if(message.content.startsWith(`${prefix}ban`)) {

            let member = message.mentions.members.first();
            member.ban().then((member) => {
                message.channel.send(":wave: " + member.displayName + " has been banned")
            })
        }
        if(message.content.startsWith(`${prefix}permscheck`)) {
            message.channel.send("You have Moderator Permissions")
        }
    }
})
//Public Commands
client.on('message', message => {
    if(message.content.startsWith(`${prefix}info`)) {
        message.channel.send("Hi! I'm currently undergoing my development phases and will have limited features. \nPlease notify the bot developer if you have any suggestions or questions!")
    }
    if(message.content.startsWith(`can I have mod?`)) {
        message.channel.send("No.")
    }
    if(message.content.startsWith(`${prefix}help`)) {
        
        let botembed = new Discord.RichEmbed()
        .setDescription("List of Commands")
        .setColor("#15f153")
        .setFooter("NexusVoid")
        .addField("^help", "Sends this message")
        .addField("^info", "Sends some info about the bot")
        .addField("END", "More commands may be added in future updates");

        return message.channel.send(botembed);
    }
})


client.login(token);
