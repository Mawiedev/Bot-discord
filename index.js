require('dotenv').config();
const handlers = require('./handlers');

const Discord = require('discord.js');
const botConfig = require('./botConfig');
const client = new Discord.Client(/* botConfig */);

client.on('ready', () => handlers.ready(client));
client.on('guildMemberAdd', member => handlers.guildMemberAdd(client));
client.on('guildMemberRemove', member => handlers.guildMemberRemove(client));
client.on('messageDelete', msg => handlers.messageDelete(client, msg));
client.on('messageUpdate', (oldMsg, newMsg) => handlers.messageUpdate(client, oldMsg, newMsg));
client.on('message', msg => handlers.message(client, msg));

client.login(process.env.TOKEN);