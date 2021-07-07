module.exports = {
    name: "template", // Command name
    aliases: ["alias1", "alias2"], // Command aliases
    description: "a description here", // Command description
    module: "module the command belongs to here", // the command module; this is required
    run: async (client, message, args) => {
        // code here
    }
}