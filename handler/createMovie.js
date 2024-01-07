const mongoose = require("mongoose");

const createMovie = async (req, res) => {
  const MoviesModel = mongoose.model("movies");

  // console.log(req.body);
  const { name, info, image, rating } = req.body;

  //everything went fine now create movie.
  let createdMovie;

  try {
    createdMovie = await MoviesModel.create({
      name: name,
      //we could also send like name only since both name are same.
      info: info,
      image: image,
      rating: rating,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }

  res.status(200).json({
    message: "movie is created.",
    createdMovie: createdMovie,
  });
};
module.exports = createMovie;
