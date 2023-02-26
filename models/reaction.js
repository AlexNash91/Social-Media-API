const mongoose = require('mongoose')

const reactionSchema = new mongoose.Schema({
    reactionId: {type: mongoose.Types.ObjectId, default: new ObjectId},
    reactionBody: {type: String, required: true, maxLength: 280},
    username: {type: String, required: true},
    createdAt: {type: Date, default: () => Date.now}
})

module.exports('Reactions', reactionSchema)