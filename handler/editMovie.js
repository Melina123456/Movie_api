const mongoose = require("mongoose");

const editMovie = async (req, res) => {
  const MovieModel = mongoose.model("movies");

  const { _id, name, info } = req.body;

  try {
    if (!_id) throw "Please provide the id of movie.";
  } catch (error) {
    res.status(200).json({
      status: "failed",
      error: error.message,
    });
    return;
  }
  try {
    await MovieModel.updateOne(
      {
        _id: _id,
      },
      {
        name: name,
        info: info,
      },
      {
        runValidators: true,
      }
    );
  } catch (e) {
    res.status(200).json({
      status: "failed",
      error: e.message,
    });
    return;
  }

  res.status(200).json({
    message: "the movie is edited.",
  });
};
module.exports = editMovie;
