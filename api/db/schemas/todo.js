const mongoose = require("mongoose");
const { Schema } = mongoose;
const TodoShema = new Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timeStamp: {
    type: String,
    default: new Date(),
  },
});

module.exports = mongoose.model("Todo", TodoShema);
