import Navbar from "../Navbar";
import Footer from "../footer";
import AnimatedCountUp from "../animatedCountComponent/AnimatedCountUp";
import Testimonials from "./Testimonials";

function AboutUs(){
    return(
    <div>
        <Navbar/>
        <Testimonials/>
        <AnimatedCountUp/>
        <Footer/>
       
    </div>
    );
}

export default AboutUs;