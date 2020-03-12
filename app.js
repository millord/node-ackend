const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const postRoutes = require("./routes/post");

// Middlewares
app.use(express.json());

// ROUTES MIDDLEWARE
app.use("/post", postRoutes);

// Connect to the db
mongoose.connect(
  process.env.DB,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log(`DB connected...`)
);

/// port and  start listening
const port = process.env.PORT | 8000;

app.listen(port, console.log(`App up and running on port ${port}`));
