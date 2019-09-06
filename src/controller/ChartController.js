const Answers = require("../models/Answers");

module.exports = {
  async index(req, res) {
    const makerOf1Happy = await Answers.find({
      response1: "MAKER",
      response2: "Oficina 1",
      response3: "Feliz"
    }).count();

    const makerOf1Medium = await Answers.find({
      response1: "MAKER",
      response2: "Oficina 1",
      response3: "Medio"
    }).count();

    const makerOf1Sad = await Answers.find({
      response1: "MAKER",
      response2: "Oficina 1",
      response3: "Triste"
    }).count();

    return res.json({
      name: "Oficina 1",
      Feliz: makerOf1Happy,
      Medio: makerOf1Medium,
      Triste: makerOf1Sad
    });
  }
};
