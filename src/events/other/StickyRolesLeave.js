// STICKY ROLES

module.exports = {
    name: "guildMemberRemove",
    run: async (client, member) => {
        let roles = []

        member.roles.cache.forEach(role => {
            if (roles.includes(role.id)) return
            roles.push(role.id)
        })

        client.userDB.set(`${member.guild.id}:${member.user.id}_stickyRoles`, roles) // saves the roles
    }
}