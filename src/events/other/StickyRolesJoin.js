// STICKY ROLES

module.exports = {
    name: "guildMemberAdd",
    run: async (client, member) => {
        if (!await client.userDB.has(`${member.guild.id}:${member.user.id}_stickyRoles`)) return

        let roles = await client.userDB.get(`${member.guild.id}:${member.user.id}_stickyRoles`) // fetches the role ids

        roles.forEach(role => {
            let r = member.guild.roles.cache.get(role) // gets the role

            try {
                member.roles.add(r) // adds the role
            } catch (error) {
                // do nothing i guess
            }
        })
    }
}