const { Client  } = require('discord.js');
const client = new Client;
const {updatePlayerCount} = require("./utils/")
global.config = require("./config.json")
client.on('ready', () => {
    console.log('Discord Bot logget ind som ${client.user.tag}'); // hvad den er logget ind som
    updatePlayerCount(client, 5) // fem sekunder før at den refresher spiller tallet på serveren
});

client.login(config.token);