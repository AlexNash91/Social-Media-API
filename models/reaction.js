const mongoose = require('mongoose')

const reactionSchema = new mongoose.Schema({
    reactionId: {type: mongoose.Types.ObjectId, default: new ObjectId},
    reactionBody: {type: String, required: true},
    username: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})