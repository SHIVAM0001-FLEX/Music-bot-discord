module.exports = {
  info: {
    name: "join",
    description: "Join the Voice channel",
    usage: "[command]",
    aliases: ["join", "joinvc", "j"]
  },

  run: async function(client, message, args) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) return message.channel.send('You need to be in a channel to use this command!');

    voiceChannel.join();
    message.react('👌');
    message.channel.send("Joined Your voice channel")
    
  },
}