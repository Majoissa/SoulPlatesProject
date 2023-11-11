import Navbar from "../Navbar";
import Footer from "../footer";
import AboutUsGrid from "./AboutUsGrid";
import Personell from "./PersonellHeading";


function AboutUs(){
    return(
    <div>
        <Navbar/>
        <Personell />
        <AboutUsGrid />
        <Footer/>
       
    </div>
    );
}

export default AboutUs;