import React from "react";
import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Footer from "./components/footer";
import Mission from "./components/Mission";
import HomeCards from "./components/Home-cards";
import MainForm from "./components/Main-Form";
import Goals from "./components/Goals";
//import NgoStory from "./components/NgoStory";
import AdminLoginButton from "./components/AdminLoginButton";
import SocialMedia from "./components/SocialMedia";
function App() {
  return (
    <div>
      <Navbar />
      <Info />
      <SocialMedia/>
      <Mission />
      <Goals />
      <HomeCards />
      <MainForm />
      <Footer />
      <AdminLoginButton/>
    </div>
  );
}
export default App;


