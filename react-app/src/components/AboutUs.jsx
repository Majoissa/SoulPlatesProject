import Goals from "./Goals";
import Navbar from "./Navbar";
import Footer from "./footer";
import AdminLoginButton from "./AdminLoginButton";
import SocialMedia from "./SocialMedia";
import DinamicText from "./DinamicText";
function AboutUs(){
    return(
    <div>
        <Navbar/>
        <SocialMedia/>
        <Goals/>
        <DinamicText text="Are you interested in our work? Just join us! We need people like you!"/>
        <Footer/>
        <AdminLoginButton/>
    </div>
    );
}

export default AboutUs;