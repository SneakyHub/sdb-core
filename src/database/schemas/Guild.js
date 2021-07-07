const Mongoose = require("mongoose")

const schema = new Mongoose.Schema({
    guildId: {
        required: true,
        type: String
    },
    economy: {
        required: false,
        type: String
    },
    hostOwnerId: {
        required: false,
        type: String
    },
    panelURL: {
        required: false,
        type: String
    },
    apiKey: {
        required: false,
        type: String
    },
    products: {
        required: false,
        type: Array
    }
})

module.exports = Mongoose.model("guild", schema)