const indexHandler = (req, res) => {
  res.status(200).json({
    message: "good",
  });
};
module.exports = indexHandler;
