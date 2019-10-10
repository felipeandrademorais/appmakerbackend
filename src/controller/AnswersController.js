const Answers = require('../models/Answers');

module.exports = {
    async index(req, res) {
        const answers = await Answers.find({}).sort('-createdAt');
        return res.json(answers);
    },

    async store(req, res) {
        const answers = await Answers.create(req.body);
        return res.json(answers);
    }
}