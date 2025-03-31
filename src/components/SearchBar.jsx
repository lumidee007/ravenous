import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import backgroundImage from "../assets/background_search_desktop.jpg";
import backgroundImageMobile from "../assets/background_search_mobile.jpg";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

function SearchBar({
  location,
  term,
  sort_by,
  setSort_by,
  handleChange,
  handleSubmit,
}) {
  const [searchError, setSearchError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const isTermEmpty = term.trim().length === 0;
    const isLocationEmpty = location.trim().length === 0;

    if (isTermEmpty || isLocationEmpty) {
      setSearchError(true);
      return;
    }

    setSearchError(false);
    handleSubmit();
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <Button
          variant="text"
          sx={{
            color: sort_by === sortByOptionValue ? "#cca353" : "white",
            fontWeight: sort_by === sortByOptionValue ? "bold" : "normal",
            textTransform: "none",
            fontSize: { xs: "0.875rem", sm: "1rem" },
            width: { xs: "100%", sm: "auto" },
          }}
          key={sortByOptionValue}
          onClick={() => handleClick(sortByOptionValue)}
        >
          {sortByOption}
        </Button>
      );
    });
  };

  const handleClick = (value) => {
    setSort_by(value);
    console.log("Clicked Button Value:", value);
  };

  return (
    <Box
      sx={{
        backgroundImage: {
          sm: `url(${backgroundImage})`,
          xs: `url(${backgroundImageMobile})`,
        },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "gray",
        height: "25rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "50%",
          borderBottom: "2px solid white",
          marginBottom: 4,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {renderSortByOptions()}
      </Box>

      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginBottom: 3,
          }}
        >
          <TextField
            label="Search Businesses"
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              width: { xs: "100%", sm: 250 },
              color: "#cca353",
              "& .MuiInputLabel-root": { color: "#cca353" },
            }}
            type="text"
            name="term"
            value={term}
            onChange={handleChange}
          />
          <TextField
            label="Location"
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              width: { xs: "100%", sm: 250 },
              color: "#cca353",
              "& .MuiInputLabel-root": { color: "#cca353" },
            }}
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#cca353;",
              borderRadius: 1,
              padding: "10px 80px",
              color: "white",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            Let's Go
          </Button>
        </Box>
      </form>
      {searchError && (
        <Typography
          color="white"
          sx={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            textAlign: "center",
            marginTop: 2,
          }}
        >
          Please provide all required fields
        </Typography>
      )}
    </Box>
  );
}

export default SearchBar;
