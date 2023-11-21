import Navbar from "../Navbar";
import Footer from "../footer";
import AboutUsGrid from "./AboutUsGrid";
import Personell from "./PersonellHeading";
import AnimatedCountUp from "../animatedCountComponent/AnimatedCountUp";
import HistoryPage from "../history/HistoryPage";
//test

function AboutUs(){
    return(
    <div>
        <Navbar/>
        <HistoryPage/>
        <Personell />
        <AboutUsGrid />
        <AnimatedCountUp/>
        <Footer/>
       
    </div>
    );
}

export default AboutUs;