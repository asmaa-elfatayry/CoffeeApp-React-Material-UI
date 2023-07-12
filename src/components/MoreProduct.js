import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import redLoveImage from "../assets/red-loce.jpg";
import blackTeaImage from "../assets/black-tea.jpg";
import bAndWImage from "../assets/b&w.jpg";
import winterStyleImage from "../assets/winter-style.jpg";
import ceramicTeaImage from "../assets/ceramic-tea.jpg";
import handleBarImage from "../assets/handle-bar.jpg";
import expressoMugImage from "../assets/expresso-mug.jpg";
import pinkCeramicImage from "../assets/pink-ceramic.jpg";
import summerCupImage from "../assets/summer-cup.jpg";
const MoreProduct = ({ onAddClick }) => {
  const cardData = [
    {
      id: 1,
      image: redLoveImage,
      title: "Red Love Cup",
      oldPrice: "$37.00 USD",
      price: "$35.00 USD",
    },
    {
      id: 2,
      image: blackTeaImage,
      title: "Black Tea Cup",
      oldPrice: "$33.00 USD",
      price: "$29.00 USD",
    },
    {
      id: 3,
      image: bAndWImage,
      title: "B&W Essentials Mug",
      oldPrice: "$20.00 USD",
      price: "$19.00 USD",
    },
    {
      id: 4,
      image: winterStyleImage,
      title: "Winter Style Mug",
      oldPrice: "$26.00 USD",
      price: "$25.00 USD",
    },
    {
      id: 5,
      image: ceramicTeaImage,
      title: "Cermic Tea",
      oldPrice: "$47.00 USD",
      price: "$45.00 USD",
    },
    {
      id: 6,
      image: handleBarImage,
      title: "No Handle Bar Cup",
      oldPrice: "$34.00 USD",
      price: "$30.00 USD",
    },
    {
      id: 7,
      image: expressoMugImage,
      title: "Espresso Cup ",
      oldPrice: "$25.00 USD",
      price: "$19.00USD",
    },
    {
      id: 8,
      image: pinkCeramicImage,
      title: "Pink Premium Ceramic",
      oldPrice: "$59.00 USD",
      price: "$55.00USD",
    },
    {
      id: 8,
      image: summerCupImage,
      title: "Summer Design Cup",
      oldPrice: "$29.00 USD",
      price: "$25.00USD",
    },
  ];
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
        More Products
      </Typography>
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
              <Button
                variant="outlined"
                sx={{
                  position: "absolute",
                  backgroundColor: "#fff",
                  right: "20px",
                  bottom: "15px",
                  color: "#A25F4B",
                }}
                onClick={onAddClick}
              >
                Add
              </Button>
              <CardMedia
                component="img"
                height="650"
                src={card.image}
                alt={`${card.title}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {card.title}
                </Typography>
                <Typography
                  variant="h5"
                  color="#A25F4B"
                  display="flex"
                  alignItems="center"
                  gap="20px"
                >
                  {card.price}
                  <Typography
                    color="text.secondary"
                    sx={{ textDecoration: "line-through" }}
                  >
                    {card.oldPrice}
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
export default MoreProduct;
