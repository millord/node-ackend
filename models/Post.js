const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    max: 30,
    min: 6
  },
  description: {
    type: String,
    required: true,
    max: 255,
    min: 10
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Post", postSchema);
