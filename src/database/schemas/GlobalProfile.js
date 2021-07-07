const Mongoose = require("mongoose")

const schema = new Mongoose.Schema({
    userId: {
        required: true,
        type: String
    },
    sneakyshards: {
        required: false,
        type: Number
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

module.exports = Mongoose.model("global_profile", schema)