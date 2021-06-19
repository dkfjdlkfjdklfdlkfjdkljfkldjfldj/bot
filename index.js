const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

  
    client.on('message', message => {
    message.channel.send('<@624919477016068096>');
});
  

client.login('ODU1Nzc3ODMyNzI5NTc1NDQ0.YM3bNg.WXC_W-iM7vp3yMKFt2n3LP3raSA');
