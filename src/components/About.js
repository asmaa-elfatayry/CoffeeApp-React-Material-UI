import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        margin: "150px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
        maxWidth: { md: "72%", xs: "90%" },
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{ fontSize: { md: "49px", xs: "37px" } }}
      >
        Even the all-powerful Pointing has no control about the blind texts.
      </Typography>

      <Typography
        variant="subtitle2"
        color="gray"
        letterSpacing="4px"
        padding="0 30px"
        gutterBottom
        sx={{ fontSize: { md: "26px", xs: "20px" } }}
      >
        It is a paradisematic country, in which roasted parts of sentences fly
        into your mouth. Even the all-powerful Pointing has no control about the
        blind texts it is an almost unorthographic life One day however a small
        line of blind text by the name of Lorem Ipsum decided to leave for the
        far World of Grammar.
      </Typography>
      <Typography
        variant="h5"
        width="fit-content"
        color="#A34635"
        borderBottom="1px solid #A34635"
        margin="auto"
        paddingBottom="5px"
        gutterBottom
      >
        Read the full Story
      </Typography>
    </Box>
  );
};
export default About;
