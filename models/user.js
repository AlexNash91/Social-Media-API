const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    thoughts: [String],
    friends: [String]
})

module.exports('User', userSchema)