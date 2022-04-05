const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder().setName("lmao").setDescription("Say what must be said."),
	run: async ({ client, interaction }) => {
		await interaction.editReply(`${process.env.SPAM}`)
	},
}