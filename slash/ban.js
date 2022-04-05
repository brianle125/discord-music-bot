const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder().setName("ban").setDescription("What do you think it does?"),
    callback: async ({message, args}) => {
        try {
            const member = message.mentions.members.first();
            const permission = message.member.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS);

            if(!permission) {
                return message.reply({
                    contents: "Someone's getting uppity!"
                });
            }
            if(!args[0]) {
                return message.reply({
                    contents: "Someone's getting uppity!"
                });
            }
            return (
                (await member.ban()) +
                message
                  .reply({
                    content: `${member} has been banned`
                  })
                  .then((msg) => {
                    setTimeout(() => msg.delete(), 5000);
                  })
              );
        } catch(err) {
            return message.reply({
                contents: "Someone got TOO uppity."
            });
        }
    }
}