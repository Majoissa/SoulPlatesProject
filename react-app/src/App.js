import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Footer from "./components/footer";
import Mission from "./components/Mission";
import Goals from "./components/Goals";
import HomeCards from "./components/Home-cards";
import MainForm from "./components/Main-Form";  

function App() {
  return (
    <div>
      <Navbar />
      <Info />
      <Mission/>
      <HomeCards />
      <Goals />
      <MainForm/>
      <Footer />
    </div>
  );
}

export default App;
