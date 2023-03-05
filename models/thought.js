const mongoose = require('mongoose');
const reactionSchema = require('./Reaction')
const dateFormat = require('../utils/dateFormat')


const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: () => Date.now() },
    username: { type: String, required: true },
    reactions: [reactionSchema]
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})

const Thoughts = mongoose.model('Thoughts', thoughtSchema)
module.exports = Thoughts;