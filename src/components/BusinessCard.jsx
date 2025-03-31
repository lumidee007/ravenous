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
      sx={{ width: "20rem" }}
      lg={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: "20.66rem" }}
          image={business.image_url}
          alt={business.name}
        />
        <CardContent>
          <Typography variant="h6" component="h6" sx={{ fontWeight: "bold" }}>
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
                sx={{ fontWeight: "bold", color: "#cca353", fontSize: 14 }}
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
                {business.state} {business.zip_code}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                {business.review_count} reviews
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
