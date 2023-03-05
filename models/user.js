const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    thoughts: { type: [String], ref: "Thoughts" },
    friends: { type: [String], ref: "User" }
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
    return friends.length
})

const User = mongoose.model('User', userSchema)

module.exports = User;