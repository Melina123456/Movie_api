const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
    minlength: [3, "The name must be atleast 3 characters."],
  },
  info: {
    type: String,
    required: [true, "The info is required"],
    minlength: [3, "The info must be atleast 3 characters."],
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
    required: [true, "The rating must be provided."],
    // min: [0, "must be between 0-10"],
    // max: [10, "must be between 0-10"],

    validate: {
      validator: (value) => {
        if (value < 0 || value > 10) {
          return false;
        }
      },
      message: "must be between 0-10.",
    },
  },
});

const movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;
