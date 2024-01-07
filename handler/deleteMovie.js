const mongoose = require("mongoose");

const deleteMovie = async (req, res) => {
  const MovieModel = mongoose.model("movies");

  const { _id } = req.query;

  try {
    if (!_id) throw "Please provide the id to delete.";
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error,
    });
    return;
  }

  await MovieModel.deleteOne({
    _id: _id,
  });

  res.status(200).json({
    message: "the movie is deleted.",
  });
};
module.exports = deleteMovie;
