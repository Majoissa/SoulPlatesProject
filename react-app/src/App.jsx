import React from "react";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Footer from "./components/footer";
import Mission from "./components/Mission";
import HomeCards from "./components/Home-cards";
import Goals from "./components/Goals";
//import NgoStory from "./components/NgoStory";
import DinamicText from "./components/DinamicText";

function App() {
  return (
    <div>
      <Navbar />
      <Info />
      <DinamicText text="Welcome to Soul Plates: an NGO in contact with people who want to help and people who need help"/>
      <Mission />
      <Goals />
      <HomeCards />
      <Footer />
    </div>
  );
}

export default App;
