const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    thoughts: { type: [String], ref: "Thoughts"},
    friends: { type: [String], ref: "User"}
})

userSchema.virtual('friendCount').get(function() {
    return friends.length
})

module.exports('User', userSchema)