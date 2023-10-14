import React from "react";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Footer from "./components/footer";
import Mission from "./components/Mission";
import HomeCards from "./components/Home-cards";
import MainForm from "./components/Main-Form";
import Goals from "./components/Goals";
import NgoStory from "./components/NgoStory";

function App() {
  return (
    <div>
      <Navbar />
      <Info />
      <Mission />
      <Goals />
      <HomeCards />
      <NgoStory/>
      <MainForm />
      <Footer />
    </div>
  );
}

export default App;
