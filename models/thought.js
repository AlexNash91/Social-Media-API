const mongoose = require('mongoose')

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280},
    createdAt: {type: Date, default: () => Date.now()},
    username: {type: String, required: true},
    reactions: [String]
})

module.exports('Thoughts', thoughtSchema)