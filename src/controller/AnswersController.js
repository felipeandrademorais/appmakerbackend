const Answers = require('../models/Answers');

module.exports = {
    async index(req, res) {
        const answers = await Answers.find({}).sort('-createdAt');
        //const maker = await Answers.find({ response1: "MAKER" }).count();

        return res.json(answers);
    },

    async store(req, res) {
        const answers = await Answers.create(req.body);
        
        return res.json(answers);
    }
}