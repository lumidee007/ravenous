import React from "react";
import BusinessCard from "../components/BusinessCard";
import { Grid2, Container } from "@mui/material";

export default function Business({ businesses }) {
  return (
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
  );
}
