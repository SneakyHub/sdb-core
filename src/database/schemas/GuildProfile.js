const Mongoose = require("mongoose")

const schema = new Mongoose.Schema({
    userId: {
        required: true,
        type: String
    },
    guildId: {
        required: true,
        type: String
    },
    currency: {
        required: false,
        type: Number
    },
    currencyName: {
        required: false,
        type: String
    },
    servers: {
        required: false,
        type: Array
    },
    panelData: {
        required: false,
        type: Object,
        default: {}
    }
})

module.exports = Mongoose.model("guild_profile", schema)