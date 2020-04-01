import * as Discord from 'discord.js';
const client = new Discord.Client();

// Values should be replaced once DB starts up
const greetMessage: String = "Welcome to Programmer's Palace\nPlease read everything in the #rules channel before continuing!";
const token: string = "I'm gnot a gnelf, I'm gnot a gnoblin, I'm a gnome! And you've been... gnomed!";

client.once('ready', () =>{
    console.log("Ready!");
});

client.on('guildMemberAdd', (member) => {
    member.user.send(greetMessage)
});

client.login(token);