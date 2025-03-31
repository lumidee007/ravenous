/* eslint-disable no-undef */
const getBusinesses = require("../controllers/yelpController");
const express = require("express");
const router = express.Router();

router.get("/", getBusinesses);

module.exports = router;
