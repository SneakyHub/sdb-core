module.exports = {
    name: "ready",
    run: async (client) => {
        status = {
            list: [
                {
                    status: online,
                    game: {
                        name: `${client.users.chache.size} users!`,
                        type: `WATCHING`
                    }
                }
            ]
        }

        setInterval(() => {
            status.current >= status.list.count ? status.current = 0 : status.current++
            client.user.setPresence(status.list[status.current])
        }, 10000)

        console.log(`SneakyBot online with inital WebSocket ping of ${Math.floor(client.ws.ping)}ms`)
    }
}