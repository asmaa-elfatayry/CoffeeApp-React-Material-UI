import { Box, Button, TextField, Typography } from "@mui/material";

const SignUp = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#01082e",
        padding: "50px 0",
        textAlign: "center",
        color: "#fff",
        width: "90%",
        margin: "80px auto",
      }}
    >
      <Typography
        className="title"
        variant="subtitle1"
        gutterBottom
        sx={{
          textTransform: "uppercase",
          fontSize: "21px",
          textAlign: "center",
          margin: { md: "50px auto", xs: "50px 100px" },
          color: "#AEAFB4",
        }}
      >
        Sign up and get free coffee bags
      </Typography>

      <Typography
        variant="h2"
        gutterBottom
        sx={{ fontSize: { md: "64px", xs: "42px" } }}
      >
        Coffee Updates
      </Typography>

      <Box
        display="flex"
        justifyContent="center"
        gap="30px"
        marginTop="40px"
        textAlign="center"
        sx={{
          flexDirection: { md: "row", xs: "column", alignItems: "center" },
        }}
      >
        <TextField
          sx={{ width: "260px", height: "50px" }}
          id="standard-basic"
          label="Customer.Lifestyle.io"
          variant="standard"
          color="success"
          focused
        />
        <Button
          variant="text"
          sx={{
            backgroundColor: "#fff",
            height: "50px",
            width: "120px",
            color: "navy",
            padding: "20px 35px",
            textTransform: "uppercase",
            "&:hover": {
              color: "#fff",
              backgroundColor: "green",
            },
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};
export default SignUp;
