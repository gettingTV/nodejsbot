const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzQwMTEzNzE2NDAxNTM3MDY0.XykSnA.ou4cr6cxHDtybIl1TX3Xp1Q0yUY';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);