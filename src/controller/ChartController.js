const Answers = require("../models/Answers");

module.exports = {
  async makerOf1(res) {
    const workshop = "Oficina 1";

    const makerOf1Happy = await Answers.find({
      response1: "MAKER",
      response2: workshop,
      response3: "Feliz"
    }).count();

    const makerOf1Medium = await Answers.find({
      response1: "MAKER",
      response2: workshop,
      response3: "Medio"
    }).count();

    const makerOf1Sad = await Answers.find({
      response1: "MAKER",
      response2: workshop,
      response3: "Triste"
    }).count();

    return res.json({
      name: workshop,
      Feliz: makerOf1Happy,
      Medio: makerOf1Medium,
      Triste: makerOf1Sad
    });
  },

  async makerOf2(res) {
    const workshop = "Oficina 2";

    const makerOf2Happy = await Answers.find({
      response1: "MAKER",
      response2: workshop,
      response3: "Feliz"
    }).count();

    const makerOf2Medium = await Answers.find({
      response1: "MAKER",
      response2: workshop,
      response3: "Medio"
    }).count();

    const makerOf2Sad = await Answers.find({
      response1: "MAKER",
      response2: workshop,
      response3: "Triste"
    }).count();

    return res.json({
      name: workshop,
      Feliz: makerOf2Happy,
      Medio: makerOf2Medium,
      Triste: makerOf2Sad
    });
  },

  async makerOf3(res) {
    const workshop = "Oficina 3";

    const makerOf3Happy = await Answers.find({
      response1: "MAKER",
      response2: workshop,
      response3: "Feliz"
    }).count();

    const makerOf3Medium = await Answers.find({
      response1: "MAKER",
      response2: workshop,
      response3: "Medio"
    }).count();

    const makerOf3Sad = await Answers.find({
      response1: "MAKER",
      response2: workshop,
      response3: "Triste"
    }).count();

    return res.json({
      name: workshop,
      Feliz: makerOf3Happy,
      Medio: makerOf3Medium,
      Triste: makerOf3Sad
    });
  },

  async makerOf4(res) {
    const workshop = "Oficina 4";

    const makerOf4Happy = await Answers.find({
      response1: "MAKER",
      response2: workshop,
      response3: "Feliz"
    }).count();

    const makerOf4Medium = await Answers.find({
      response1: "MAKER",
      response2: workshop,
      response3: "Medio"
    }).count();

    const makerOf4Sad = await Answers.find({
      response1: "MAKER",
      response2: workshop,
      response3: "Triste"
    }).count();

    return res.json({
      name: workshop,
      Feliz: makerOf4Happy,
      Medio: makerOf4Medium,
      Triste: makerOf4Sad
    });
  }
};