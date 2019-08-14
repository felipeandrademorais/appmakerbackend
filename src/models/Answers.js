const mongoose = require('mongoose');

const AnswersSchema = new mongoose.Schema({
    response1: String,
    response2: String,
    response3: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Answers', AnswersSchema);

