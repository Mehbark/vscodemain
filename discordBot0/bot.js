//https://appdividend.com/2020/07/31/javascript-sleep-how-to-make-your-functions-sleep/
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const Discord = require("discord.js");
const { resolve } = require("path");
const client = new Discord.Client();
var prefix = "!";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  if (message.content[0] === prefix) {
    const cmd = message.content.slice(1, message.content.length);
    if (cmd === "avatar") {
      message.channel.send(message.author.displayAvatarURL());
    }
    if (cmd === "spamMe") {
      for (let i = 0; i < 100; i++) {
        message.channel.send(`${message.author}`);
      }
    }
  }
});

client.on("typingStart", (channel, user) => {
  const upperUsername = user.username.toUpperCase();
  channel.send(
    `SHUT UP ${upperUsername} SHUT UP ${upperUsername} SHUT UP ${upperUsername}`
  );
  const task = async () => {
    await sleep(5000);
    const member = channel.guild.members.resolve(user);
    member
      .kick("loud")
      .then(() => {
        channel.send("too loud");
      })
      .catch((err) => {
        console.error(err);
      });
    resolve("resolved");
  };
  task.call();
});

client.login("NzQ2MDI3NDcxOTQ5NzkxMjU1.Xz6WOQ.DE1LVlUucaaoQOy-3LmWbrRT2Ao");
