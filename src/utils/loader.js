const fs = require("fs")
const path = require("path")
const loader = require("../utils/loader.js")

module.exports.loadCommands = async (client, dir = "") => {
    const filePath = path.join(__dirname, dir);
    const files = await fs.readdirSync(filePath);
    for (const file of files) {
        const stat = await fs.lstatSync(path.join(filePath, file));
        if (stat.isDirectory()) loader.loadCommands(client, path.join(dir, file));
        if (file.endsWith('.js')) {
            const cmd = require(path.join(filePath, file));
            if (cmd.disabled == true) {
                continue;
            }
            if (!client.modules.includes(cmd.module)) {
                continue;
            }
            client.commands.set(cmd.name, cmd);

            if (!cmd.aliases) continue;
            cmd.aliases.forEach((alias) => {
                client.commands.set(alias, cmd);
            });
        }
    }
}

module.exports.loadEvents = async (client, dir = "") => {
    const filePath = path.join(__dirname, dir);
    const files = await fs.readdirSync(filePath);
    for (const file of files) {
        const stat = await fs.lstatSync(path.join(filePath, file));
        if (stat.isDirectory()) loader.loadEvents(client, path.join(dir, file));
        if (file.endsWith('.js')) {
            const event = require(path.join(filePath, file));
            if (event.disabled == true) {
                continue;
            }
            client.on(event.name, event.run.bind(event, client))
        }
    }
}