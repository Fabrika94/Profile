const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`AXOteam`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :axo team')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('message', message => {
    if (message.content.startsWith(".kick")) {
        var mention = message.mentions.members.first();
        if(!mention) return message.channel.send("please mention him");
    
        mention.kick("By: " + message.author.tag);
        
        message.channel.send("this member was kicked:"+ mention.tag);
    };
    });
    client.on('message', message => {
        if (message.author.id === client.user.id) return;
                if (message.content.startsWith(prefix + "ping")) {
            message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
        }
    });
    client.on('guildMemberAdd', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`New Member`)
        .setDescription(`Welecome to Axo Team Don't Fotget Your Role`)
        .addField(' :bust_in_silhouette:  ',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('GREEN')
        .setFooter('Axo Team', 'https://cdn.discordapp.com/attachments/492779307236589568/494939812164534293/42648276_706591503039799_7074002451535233024_n.jpg')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    });
    client.on('message', msg => {
        if (msg.author.bot) return;
        if (!msg.content.startsWith(prefix)) return;
        let command = msg.content.split(" ")[0];
        command = command.slice(prefix.length);
        let args = msg.content.split(" ").slice(1);
      
          if(command === "clear") {
              const emoji = client.emojis.find("name", "wastebasket")
          let textxt = args.slice(0).join("");
          if(msg.member.hasPermission("MANAGE_MESSAGES")) {
          if (textxt == "") {
              msg.delete().then
          msg.channel.send("***```how many messages do you want to delete```***").then(m => m.delete(3000));
      } else {
          msg.delete().then
          msg.delete().then
          msg.channel.bulkDelete(textxt);
              msg.channel.send("```php\n Number of messages that have been cleared: " + textxt + "\n```").then(m => m.delete(3000));
              }    
          }
      }
      });
      client.on("guildMemberAdd", function(member) {
        let role = member.guild.roles.find("name", "Guest");
        member.addRole(role).catch(console.error);
    });
      client.login(process.env.BOT_TOKEN);
