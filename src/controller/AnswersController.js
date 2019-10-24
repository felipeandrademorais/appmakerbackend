const Answers = require("../models/Answers");

module.exports = {
  async index(req, res) {
    const { filter } = req.query;

    const answers = await Answers.find({ name: filter }).sort("-createdAt");
    return res.json(answers);
  },

  async table(req, res) {
    const { page = 1 } = req.query;
    const answers = await Answers.paginate({}, { page, limit: 8 });
    return res.json(answers);
  },

  async store(req, res) {
    const answers = await Answers.create(req.body);
    return res.json(answers);
  }
};
