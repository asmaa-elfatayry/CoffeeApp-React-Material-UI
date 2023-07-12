import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import lifeStyle1 from "../assets/lifeStyle1.jpg";
import lifeStyle2 from "../assets/lifeStyle2.jpg";
import lifeStyle3 from "../assets/lifeStyle3.jpg";
const LifeStyle = () => {
  const cardData = [
    {
      id: 1,
      image: lifeStyle1,
      subTitle:
        "Health Check: why do i get a headache when i haven't had my coffe?",
      pragraph:
        "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      date: "JUNE 21,2023",
    },
    {
      id: 2,
      image: lifeStyle2,
      subTitle: "How long does a cup of coffee keep you awake?",
      pragraph:
        "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      date: "JUNE 21,2023",
    },
    {
      id: 3,
      image: lifeStyle3,
      subTitle:
        "Recent research suggests that heavy cooffe drinkers may reap health benefits.",
      pragraph:
        "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      date: "JUNE 21,2023",
    },
  ];
  return (
    <Box>
      <Box>
        <Typography
          className="title"
          variant="subtitle1"
          gutterBottom
          sx={{
            textTransform: "uppercase",
            fontSize: "21px",
            textAlign: "center",
            margin: { md: "120px auto", xs: "120px 100px" },
            color: "#AEAFB4",
          }}
        >
          Behind the mugs, lifestyle stories
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "center",
          width: { lg: "70%", sm: "90%" },
          margin: "auto",
          gap: "15px",
          marginBottom: "80px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {cardData.map((card) => (
          <Card
            sx={{ maxWidth: { lg: "31.333% ", md: "50%", xs: "90%" } }}
            key={card.id}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="420"
                src={card.image}
                alt={`${card.id}`}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  component="div"
                  fontSize="22px"
                >
                  {card.subTitle}
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  fontSize="19px"
                >
                  {card.pragraph}
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{ textTransform: "uppercase" }}
                >
                  {card.date}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default LifeStyle;
