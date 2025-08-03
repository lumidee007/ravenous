/* eslint-disable no-undef */
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const yelpRouter = require("./routes/yelp");

const app = express();

app.use(cors());

app.use("/api/yelp", yelpRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
