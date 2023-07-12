import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const FeatureMug = () => {
  return (
    <Box>
      <Typography
        className="title"
        variant="subtitle1"
        gutterBottom
        sx={{
          textTransform: "uppercase",
          fontSize: "21px",
          textAlign: "center",
          margin: "120px auto",
          color: "#AEAFB4",
        }}
      >
        Featured Mug
      </Typography>

      <Box
        sx={{
          display: "flex",

          justifyContent: "center",
          width: { lg: "70%", xs: "90%", md: "80%" },
          margin: "auto",
          gap: "15px",
          marginBottom: "80px",
          flexWrap: "wrap",
        }}
      >
        <Card sx={{ maxWidth: { xs: "90%", md: "38% ", lg: "35%" } }}>
          <CardActionArea sx={{ position: "relative" }}>
            <Button
              variant="outlined"
              sx={{
                position: "absolute",
                backgroundColor: "#fff",
                right: "20px",
                top: "20px",
                color: "#A25F4B",
              }}
            >
              On Sale.
            </Button>
            <CardMedia
              component="img"
              height="650"
              image={require("../assets/pink-ceramic.jpg")}
              alt="Pink Premium Ceramic"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Pink Premium Ceramic
              </Typography>
              <Typography
                variant="h5"
                color="#A25F4B"
                display="flex"
                alignItems="center"
                gap="20px"
              >
                $ 59.50 USD{" "}
                <Typography
                  color="text.secondary"
                  sx={{ textDecoration: "line-through" }}
                >
                  $99.00 USD
                </Typography>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: { xs: "85%", md: "38% ", lg: "35%" } }}>
          <CardActionArea sx={{ position: "relative" }}>
            <Button
              variant="outlined"
              sx={{
                position: "absolute",
                backgroundColor: "#fff",
                right: "20px",
                top: "20px",
                color: "#A25F4B",
              }}
            >
              On Sale.
            </Button>
            <CardMedia
              component="img"
              height="650"
              image={require("../assets/golden-mug.jpg")}
              alt=" Golden Design Mug"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Golden Design Mug
              </Typography>
              <Typography
                variant="h5"
                color="#A25F4B"
                display="flex"
                alignItems="center"
                gap="20px"
              >
                $ 69.00 USD
                <Typography
                  color="text.secondary"
                  sx={{ textDecoration: "line-through" }}
                >
                  $79.00 USD
                </Typography>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};
export default FeatureMug;
