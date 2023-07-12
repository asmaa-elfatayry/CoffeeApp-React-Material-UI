import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import Cup from "../assets/cup.jpg";
import paper from "../assets/book.jpg";
import Mug from "../assets/mug.jpg";
import Sipritor from "../assets/sipritor.jpg";
const Offer = () => {
  return (
    <Box marginBottom="100px">
      <Box>
        <Typography
          className="title"
          variant="subtitle1"
          gutterBottom
          sx={{
            textTransform: "uppercase",
            fontSize: "21px",
            textAlign: "center",
            margin: "120px 100px",
            color: "#AEAFB4",
            margin: { md: "150px auto", xs: "80px 100px" },
          }}
        >
          Buy 2 mugs and get a coffee magazine free
        </Typography>
      </Box>
      <Grid container sx={{ width: { xl: "70%", xs: "90%" } }} margin="auto">
        <Grid item lg={7} sm={12} container>
          <Box display="flex" alignItems="center" gap="20px">
            <Box
              sx={{
                width: { md: "420px", sm: "360px", xs: "280px" },
                height: { md: "420px", sm: "360px", xs: "280px" },
              }}
            >
              <img src={paper} alt="paper" width="100%" height="100%" />
            </Box>

            <Box display="flex" flexDirection="column" gap="20px">
              <Box
                sx={{
                  height: { md: "200px", sm: "170px", xs: "130px" },
                }}
              >
                <img src={Mug} alt="Mug" height="100%" />
              </Box>
              <Box
                sx={{
                  height: { md: "200px", sm: "170px", xs: "130px" },
                }}
              >
                <img src={Cup} alt="Cup" height="100%" />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={5} sm={12} paddingTop="25px">
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ textTransform: "uppercase", fontSize: "19px", color: "gray" }}
          >
            Premium Offer
          </Typography>
          <Typography variant="h2" gutterBottom>
            Get our Coffee Magazine
          </Typography>
          <Typography
            variant="subtitle1"
            color="gray"
            fontSize="24px"
            gutterBottom
          >
            The most versatile furniture system ever created. Designed to fit
            your life.
          </Typography>
          <Button
            variant="text"
            sx={{
              backgroundColor: "black",
              height: "50px",
              width: "fit-content",
              color: "white",
              margin: "20px auto",
              padding: "20px 35px",
              textTransform: "uppercase",
              "&:hover": {
                color: "navy",
                backgroundColor: "gold",
              },
            }}
          >
            Start Shopping
          </Button>
        </Grid>
      </Grid>
      <Box
        sx={{
          margin: "200px 0",
          backgroundImage: `url(${Sipritor})`,
          minHeight: "500px",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
    </Box>
  );
};
export default Offer;
