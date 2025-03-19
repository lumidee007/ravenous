require("dotenv").config();
const express = require("express");
var cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ message: "Hello yelpAPI" });
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
