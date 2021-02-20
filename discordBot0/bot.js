//https://appdividend.com/2020/07/31/javascript-sleep-how-to-make-your-functions-sleep/
const spared = ["354988989100589058", "488904512787185684"];
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const { exception } = require("console");
const Discord = require("discord.js");
const { appendFile } = require("fs");
const { resolve } = require("path");
const client = new Discord.Client();
var prefix = "!";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

setInterval(function () {
  let now = new Date();
  console.log(`Currently online at ${now.toDateString()} ${now.toTimeString()}`);
}, 60000);

client.on("message", (message) => {
  appendFile(
    "C:/Users/Clark/Documents/log.txt",
    `\n${message.author.username}:\n${message.content}\n`,
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
  if (
    message.content === "magical girl transformation" ||
    message.content === "me chloroform"
  ) {
    const member = message.guild.members.resolve(message.author);
    member.setNickname("chloroform");
    message.channel.send("you're chloroform now");
  } else if (message.content === `${client.user}`) {
    message.channel.send("a");
  } else if (message.content === "whats wrong?") {
    message.channel.send("my wife left me.........");
  } else if (message.content === "lol what") {
    message.channel.send(`here name was ${client}....`);
  } else if (message.content === "do you fart") {
    message.channel.send("i am a discord bot");
  }
  // if (message.content === "sorry") {
  //   message.channel.send("ill never forgive you");
  //   channel.send("intentional error");
  // }
  else if (message.content[0] === prefix) {
    const cmd = message.content.slice(1, message.content.length);
    switch (cmd) {
      case "avatar":
        message.channel.send(message.author.displayAvatarURL());
        break;

      case "spamMe":
        for (let i = 0; i < 5; i++) {
          message.channel.send(`LETS GOOOOOOOOOOOOOOOOOOOOOOOOOOO`);
        }
        break;

      default:
        message.channel.send(`Command \"${cmd}\" not found.`);
    }
  }

  const task = async () => {
    await sleep(1000);
    const member = message.guild.members.resolve(message.author);
    member
      .kick("loud")
      .then(() => {
        message.channel.send("too loud");
        console.log(`${message.author.username} kicked`);
      })
      .catch((err) => {
        // console.error(err);
      });
    resolve("resolved");
  };

  if (spared.indexOf(message.author.id) >= 0) {
    console.log(`Exception for ${message.author.username}`);
  } else {
    if (message.content === "chloroform") {
      message.channel.send(
        `im so sorry ${message.author.username.toLowerCase()}, i LOVE chloroform, but....`
      );
    }
    task.call();
  }
});

client.on("typingStart", (channel, user) => {
  const task = async () => {
    const upperUsername = user.username.toUpperCase();
    channel.send(
      [
        `NO TALKING  ${upperUsername}`,
        `NO TALKING  ${upperUsername}`,
        `NO TALKING  ${upperUsername}`,
      ].join(" ")
    );
    await sleep(5000);
    const member = channel.guild.members.resolve(user);
    member
      .kick("loud")
      .then(() => {
        channel.send("too loud");
      })
      .catch((err) => {
        // console.error(err);
      });
    resolve("resolved");
  };
  if (spared.indexOf(user.id) >= 0) {
    console.log(`Exception for ${user.username}`);
  } else {
    task.call();
  }
});

// client.on("messageReactionAdd", (messageReaction, user) => {
//   console.log("reaction");
//   const member = messageReaction.message.guild.resolve(user);
//   member
//     .kick("loud")
//     .then(() => {
//       messageReaction.channel.send("too loud");
//     })
//     .catch((err) => {
//       console.error(err);
//     });D
// });

client.login("NzQ2MDI3NDcxOTQ5NzkxMjU1.Xz6WOQ.DE1LVlUucaaoQOy-3LmWbrRT2Ao");
