/* eslint-disable no-undef */
require("dotenv").config();
const YELP_API_KEY = process.env.YELP_API_KEY;

const getBusinesses = async (req, res) => {
  const { term, location, sort_by } = req.query;

  const url = `https://api.yelp.com/v3/businesses/search?location=${encodeURIComponent(
    location
  )}&term=${encodeURIComponent(term)}&sort_by=${encodeURIComponent(
    sort_by
  )}&limit=24`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${YELP_API_KEY}`,
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data from Yelp API:", error);
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = getBusinesses;
