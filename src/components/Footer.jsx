import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#cca353",
        color: "#fff",
        textAlign: "center",
        padding: "1.5rem",
        marginTop: "auto",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Ravenous by Femi · Powered by Yelp API
      </Typography>
    </Box>
  );
};

export default Footer;
