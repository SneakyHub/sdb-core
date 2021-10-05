module.exports = {
    name: "ping",
    aliases: ["test"],
    description: "Sends a message with Client WebSocket Ping",
    module: "utility",
    run: async (client, message, args) => {
        message.channel.send("Pinging...").then(msg => {
            msg.edit(`:ping_pong: Pong! ${client.ws.ping} ms`)
        })
    }
}