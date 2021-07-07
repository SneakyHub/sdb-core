const { Client, Collection } = require("discord.js") // gets the Client and Collection classes from discord.js
const client = new Client() // creates a client
const loader = require("./utils/loader")
const config = require("./config.json")
const { Database } = require("quickmongo")
const db = new Database(config.MONGO)

client.db = db
client.profileDB = db.createModel("Profiles")
client.guildDB = db.createModel("Guilds")

client.prefix = config.PREFIX // the bot prefix
client.modules = ["host-management", "utility", "economy"] // the command modules to load in
client.commands = new Collection() // commands collection\

loader.loadCommands(client, "../commands") // loads the commands
loader.loadEvents(client, "../events") // loads the events

client.login(config.TOKEN) // logs into the bot and makes it come online