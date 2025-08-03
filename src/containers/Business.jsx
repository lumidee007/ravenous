import React from "react";
import BusinessCard from "../components/BusinessCard";
import {
  Grid2,
  Container,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";

export default function Business({ businesses, error }) {
  if (error) {
    return (
      <Typography
        variant="h5"
        sx={{
          marginTop: 10,
          textAlign: "center",
          fontWeight: "bold",
          color: "red",
        }}
      >
        {error || "Something went wrong"}
      </Typography>
    );
  }

  return businesses && businesses.length > 0 ? (
    <Container sx={{ marginTop: 10 }}>
      <Grid2
        container
        spacing={12}
        sx={{
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        {businesses.map((business, index) => (
          <Grid2 item xs={12} md={6} lg={4} key={index}>
            <BusinessCard business={business} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <Typography variant="h6" color="textSecondary">
        No result found
      </Typography>
    </Box>
  );
}
