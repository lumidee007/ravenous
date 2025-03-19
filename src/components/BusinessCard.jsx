import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

export default function BusinessCard({ business }) {
  return (
    <Card
      sx={{ width: "16.66rem" }}
      lg={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: "16.66rem" }}
          image={business.imageSrc}
          alt={business.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            sx={{ fontWeight: "bold" }}
          >
            {business.name}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography variant="body2" color="textPrimary">
                {business.address}
              </Typography>
              <Typography
                variant="body2"
                color="textPrimary"
                sx={{ fontWeight: "bold", color: "#cca353" }}
              >
                {business.category.toUpperCase()}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography variant="body2" color="textPrimary">
                {business.city}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#cca353" }}
              >
                {business.rating} stars
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography variant="body2" color="textPrimary">
                {business.state} {business.zipCode}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                {business.reviewCount} reviews
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
