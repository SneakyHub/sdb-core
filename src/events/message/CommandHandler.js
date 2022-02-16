module.exports = {
    name: "message", // the event name
    run: async (client, message) => { // the function to run the code below
        if (message.author.bot || !message.content.startsWith(client.prefix)) return // checks if the user is a bot or if the message starts with the prefix

        const args = message.content.slice(client.prefix.length).trim().split(" "), // splits the message into an array of arguments
        command = args.shift().toLowerCase() // makes the command lower cased

        try {
            client.commands.get(command).run(client, message, args) // attempts to run the command
        } catch (error) {
            return // stops the process if theres an error
        }
    }
}