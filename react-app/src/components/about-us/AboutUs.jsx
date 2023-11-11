import Navbar from "../Navbar";
import Footer from "../footer";
import AboutUsGrid from "./AboutUsGrid";
import Personell from "./PersonellHeading";
import AnimatedCountUp from "../animatedCountComponent/AnimatedCountUp";
import Testimonials from "./Testimonials";

function AboutUs(){
    return(
    <div>
        <Navbar/>
        <Personell />
        <AboutUsGrid />
        <Testimonials/>
        <AnimatedCountUp/>
        <AnimatedCountUp/>
        <Personell />
        <AboutUsGrid />
        <Testimonials/>
        <Footer/>
       
    </div>
    );
}

export default AboutUs;