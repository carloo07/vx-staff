const { MessageEmbed } = require("discord.js");
const { support_server } = require("../config.json");
const { LOCALE } = require("../util/BotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "help",
  aliases: ["h"],
  description: i18n.__("help.description"),
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setAuthor(`${message.client.user.username}`, `${message.client.user.displayAvatarURL({ format: "png" })}`)
      .setTitle(i18n.__mf("help.embedTitle", { botname: message.client.user.username }))
      .setThumbnail(message.client.user.displayAvatarURL({ format: "png" }))
      .addField("🎵 Music Commands","`1!play`, `1!play`, `1!skip`, `1!stop`, `1!pause`, `1!resume`, `1!loop`, `1!np`, `1!queue`, `1!skipto`, `1!volume`")
      .setColor("BLUE")
      .setFooter(`Requested by ${message.author.username}`);

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
