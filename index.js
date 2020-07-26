const Discord = require("discord.js")
const fs = require('fs')
const alt = new Discord.Client();
var prefix = "!"

alt.on("ready", () => {
  console.log(`${alt.user.tag} Is Ready!`)
});

alt.on("message", async message =>{
  if (message.content == "p!gen" && message.author.id == "683069732106141733" || message.author.id == "717885800980676683"){
    if (message.channel.id == "733409587054641192"){
      await message.channel.send("p!gen").then(msg => {
                    setInterval(function() {
                        msg.channel.send(`p!gen`)
                    }, 62000);
                })
    }
  }
})

alt.on("message", async message =>{
  var channel = alt.guilds.get("736697496646058084").channels.get("736713431411064902")
  if (message.channel.type == "dm" && message.author.id == "722274179793289256"){
    await channel.send(`<${message.content}>`)
    alt.guilds.get("736697496646058084").channels.get("736733406750310451").send("**Pulsar Generated Code Sent To <#736713431411064902>\n\nThis Is An Automated Message\n\n☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰**")
    console.log(`I Sent => ${message.content} <= To => ${alt.guilds.get("736697496646058084").name} <=`)
    function log() {
            fs.appendFile('./codes.txt', `${message.content}\n`, 'utf8',
        function (err) {
                if (err) throw err;
            });
            return;  
    }
    log()
  }
});

var cmd = require("node-cmd")

alt.on("message", message => {
  if (message.content.startsWith(prefix + "refresh") && message.member.hasPermission("ADMINISTRATOR")){
    cmd.run("refresh")
    message.channel.send("Script Refreshed !")
  }
});

alt.login(process.env.TOKEN)