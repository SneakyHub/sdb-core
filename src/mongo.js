const quickmongo = require("quickmongo")
const database =

    module.exports = async (uri) => {
        Mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
            keepAlive: true
        })

        return Mongoose
    }