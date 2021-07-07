module.exports = async (length) => {
    if (!length) return new Error("Length is a required parameter.")
    if (typeof length != "number") return new Error("Length must be a number.")

    let root = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    let password = ""

    while (password.length < length) {
        password += root[Math.floor(Math.random() * root.length)]
    }

    return password
}