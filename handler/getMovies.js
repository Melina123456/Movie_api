const mongoose = require("mongoose");

const getMovies = async (req, res) => {
  const MovieModel = mongoose.model("movies");

  const movie = await MovieModel.find({});

  res.status(200).json({
    movie: movie,
  });
};
module.exports = getMovies;
