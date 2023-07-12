import { useState } from "react";
import "./App.css";
import About from "./components/About";
import FeatureMug from "./components/FeatureMug";
import Footer from "./components/Footer";
import HeaderImg from "./components/HeaderImg";
import LifeStyle from "./components/LifeStyle";
import MoreProduct from "./components/MoreProduct";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import SignUp from "./components/SignUp";

function App() {
  const [count, setCount] = useState(0);

  const handleAddClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Navbar count={count} />
      <HeaderImg />
      <About />
      <FeatureMug />
      <MoreProduct onAddClick={handleAddClick} />
      <Offer />
      <LifeStyle />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
