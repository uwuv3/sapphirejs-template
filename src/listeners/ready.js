const { Listener } = require("@sapphire/framework");
const { green, yellow } = require("colors");
const { Client, ActivityType, Events } = require("discord.js");

class ReadyListener extends Listener {
  constructor(context, options) {
    super(context, {
      ...options,
      once: true,
      event: Events.ClientReady,
    });
  }
  /**
   *
   * @param {Client} client
   */
  run(client) {
    const { username, id } = client.user;
    this.container.logger.info(
  `Logged in: ${username} (${id})`
    );
    client.user.setActivity({
      name: "Ufak Bir Bakım...",
      type: ActivityType.Watching,
    });
  }
}
module.exports = {
  ReadyListener,
};
