const { SapphireClient, Events } = require("@sapphire/framework");
const { IntentsBitField, Partials } = require("discord.js");
const client = new SapphireClient({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.DirectMessageTyping,
    IntentsBitField.Flags.DirectMessageReactions,
  ],
  partials: [Partials.Channel, Partials.Message, Partials.User],
});
const Discord_TOKEN = "TOKEN"
const main = async () => {
  try {
    await client.login(Discord_TOKEN);
  } catch (error) {
    client.logger.error(
      error
    );
  }
};
main();