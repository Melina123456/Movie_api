const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const indexHandler = require("./handler/indexHandler");
const getMovies = require("./handler/getMovies");
const createMovie = require("./handler/createMovie");
const editMovie = require("./handler/editMovie");
const deleteMovie = require("./handler/deleteMovie");

const app = express();

app.use(express.json());

require("./models/movies.model");

//url leko
const mongo_connect = process.env.mongo_connect;

mongoose
  .connect(mongo_connect, {})
  .then(() => {
    console.log("Mongo connection was successful");
  })
  .catch((err) => {
    console.log("Mongo Connection failed");
  });

app.get("/", indexHandler);

//create
app.post("/movies", createMovie);

//read
app.get("/movies", getMovies);

//edit
app.patch("/movies", editMovie);

//delete
app.delete("/movies", deleteMovie);

app.listen(8000, () => {
  console.log("server started");
});
