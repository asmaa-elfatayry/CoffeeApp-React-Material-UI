import { Box, Button, Typography, colors, Theme } from "@mui/material";

const HeaderImg = () => {
  return (
    <Box
      className="bg-header"
      sx={{
        textAlign: "center",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{ textTransform: "uppercase", fontSize: "19px" }}
      >
        Best place to buy design
      </Typography>
      <Typography
        variant="h1"
        gutterBottom
        sx={{ fontSize: { md: "68px", xs: "44px" } }}
      >
        Coffee Mugs
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ fontSize: { md: "24px", xs: "18px" } }}
        gutterBottom
      >
        The most versatile furniture system ever created. Designed to fit your
        life, made to move and grow.
      </Typography>
      <Button
        variant="text"
        sx={{
          backgroundColor: "#fff",
          height: "50px",
          width: "fit-content",
          color: "navy",
          margin: "20px auto",
          padding: "20px 35px",
          textTransform: "uppercase",
          "&:hover": {
            backgroundColor: "gold", // Replace with your desired hover style
          },
        }}
      >
        Explore Our Products
      </Button>
    </Box>
  );
};

export default HeaderImg;
