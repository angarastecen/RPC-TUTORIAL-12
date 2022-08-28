///////////////////////////////////

//💙 Credit Infos 
//💜 This Project Made By Radiant#1106
//💛 Must Give Credits While Using 
//💚 Support Server 
//♥️ https://discord.gg/z6RMrphPXE
//🔥 Youtube 
//https://  youtube.com/channel/UCjTGec-G_0RDIEmueyJmDQw
//🏘️ @Radiant#1106

///////////////////////////////////

const discord = require('discord.js-selfbot-v11');
const fs = require('fs');

const client = new discord.Client();
const keepAlive = require('./server.js');
const config = require('./config.json');

const events = fs.readdirSync('./events/');
events.forEach(file => {
	const eventname = file.split('.')[0];
	const event = require(`./events/${file}`);
	client.on(eventname, event.bind(null, client));
});

keepAlive();
client.login(process.env.token);



///////////////////////////////////

//💙 Credit Infos 
//💜 This Project Made By Radiant#1106
//💛 Must Give Credits While Using 
//💚 Support Server 
//♥️ https://discord.gg/6YEJtS7ank
//🔥 Youtube 
//🙉 https://youtube.com/channel/UCjTGec-G_0RDIEmueyJmDQw
//🏘️ @Radiant#1106

///////////////////////////////////