import "./Info.css";
import InfoCarousel from "./InfoCarousel";
import helping1 from "./img/helping.jpg";
import helping2 from "./img/helping2.jpg";
import helping3 from "./img/helping3.jpg";

function Info() {
  return (
    <header>
      <InfoCarousel
        img1={helping2}
        img2={helping1}
        img3={helping3}
        caption1="We rise by lifting others"
        text1="Help us to help! be part of Soul Plates"
        caption2="Join this movement"
        text2='"Be the change the world needs"'
        caption3="Union make force"
        text3="The world needs your hands!"
      />
    </header>
  );
}

export default Info;
