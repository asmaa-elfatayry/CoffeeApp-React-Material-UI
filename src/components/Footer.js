import { Box, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box>
      <Grid
        container
        sx={{
          width: { xl: "70%", xs: "90%" },
          padding: "50px 20px",
          backgroundColor: "#fff",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
        margin="auto"
      >
        <Grid item lg={3} sm={6} xs={12} container>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#333",
              textDecoration: "none",
            }}
          >
            CoffeStyle.
          </Typography>
          <Typography
            color="gray"
            variant="subtitle2"
            fontSize="18px"
            padding="15px 0"
          >
            Delivering the best coffee life since 1996. From coffee geeks to the
            real ones.
          </Typography>
          <Typography variant="subtitle1">CoffeeStyle Inc. © 1996</Typography>
        </Grid>
        <Grid item lg={3} sm={6} xs={12} container>
          <ul>
            <li
              style={{
                fontWeight: "bold",
                color: "navy",
              }}
            >
              Menu
            </li>
            <li>Home</li>
            <li>Our Products</li>
            <li>About</li>
            <li>Contact</li>
            <li>StyleGuide</li>
          </ul>
        </Grid>
        <Grid item lg={3} sm={6} xs={12} container>
          <ul>
            <li
              style={{
                fontWeight: "bold",
                color: "navy",
              }}
            >
              {" "}
              Follow Us
            </li>
            <li>Facebook</li>
            <li>Instgram</li>
            <li>Pintersted</li>
            <li>Twitter</li>
          </ul>
        </Grid>
        <Grid item lg={3} sm={6} xs={12} paddingTop="25px">
          <ul>
            <li
              style={{
                fontWeight: "bold",
                color: "navy",
              }}
            >
              Menu
            </li>
            <li>Contact us</li>
            <li>We always happy to help</li>
            <li>Us@CoffeeStyle.io</li>
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Footer;
