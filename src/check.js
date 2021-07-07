const guild = require("./database/schemas/Guild") // the guild schema

module.exports = async (message) => {
    let guildId = message.guild.id // get the guild id from the message

    const findGuild = await guild.findOne({ guildId: guildId }) // find the guild in the database

    if (!findGuild) { // if the guild isnt in the database then send an error
        return new Error("The guild is not in the database.") // sends the error
    } else { // if the guild is in the database then run the following code
        const getGuild = await guild.findOne({ guildId: guildId }) // find the guild in the database
        let eco = getGuild.economy // get the "economy" key from the MongoDB document

        if (eco === "guildOnly") { // if the guild's economy is set to "guildOnly" then return true
            return true // return true
        }

        if (eco === "global") { // if the guild's economy is set to "global" then return false
            return false // return false
        }
    }
}