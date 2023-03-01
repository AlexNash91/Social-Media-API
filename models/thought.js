const mongoose = require('mongoose')


const reactionSchema = new mongoose.Schema({
    reactionId: {type: mongoose.Types.ObjectId, default: new ObjectId},
    reactionBody: {type: String, required: true, maxLength: 280},
    username: {type: String, required: true},
    createdAt: {type: Date, default: () => Date.now}
})

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280},
    createdAt: {type: Date, default: () => Date.now()},
    username: {type: String, required: true},
    reactions: [reactionSchema]
})

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

const Thoughts = model('Thoughts', thoughtSchema)
module.exports = Thoughts;