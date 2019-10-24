const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const AnswersSchema = new mongoose.Schema({
  name: String,
  response: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

AnswersSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Answers", AnswersSchema);
