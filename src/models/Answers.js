const mongoose = require('mongoose');


const AnswersSchema = new mongoose.Schema({
    name: String,
    response: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Answers', AnswersSchema);

